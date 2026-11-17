const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password })
});
