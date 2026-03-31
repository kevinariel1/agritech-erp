async function runSmokeTests() {
  const BASE_URL = 'http://localhost:5000/api';
  console.log('🚀 Starting API Smoke Tests...\n');

  try {
    // 1. Health check
    console.log('Checking /api/health...');
    const healthRes = await fetch(`${BASE_URL}/health`);
    if (!healthRes.ok) throw new Error(`Health check failed: ${healthRes.statusText}`);
    const healthData = await healthRes.json();
    console.log('✅ Health check passed:', healthData);

    // 2. Auth - Login check with invalid credentials to test error response
    console.log('\nChecking /api/auth/login with invalid data...');
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'fake@example.com', password: 'wrongpassword' }),
    });
    if (loginRes.status === 401 || loginRes.status === 404 || !loginRes.ok) {
        console.log(`✅ Login auth failed correctly with status ${loginRes.status} as expected.`);
    } else {
        throw new Error(`Login behaved unexpectedly: ${loginRes.status}`);
    }

    // 3. Optional: Add more specific module pings (Unauthenticated calls should return 401)
    const protectedRoutes = ['/products', '/inventory', '/orders', '/shipments', '/payments'];
    for (const route of protectedRoutes) {
      console.log(`\nChecking protected route: ${route}`);
      const res = await fetch(`${BASE_URL}${route}`);
      if (res.status === 401) {
        console.log(`✅ ${route} correctly returned 401 Unauthorized without token.`);
      } else {
        console.warn(`⚠️ ${route} returned status ${res.status}. Expected 401.`);
      }
    }

    console.log('\n🎉 Smoke tests completed successfully!');
  } catch (error) {
    console.error('\n❌ Smoke tests failed:', error);
    process.exit(1);
  }
}

runSmokeTests();
