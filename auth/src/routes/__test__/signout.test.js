// const request = require('supertest');
// const { app } = require('../../app');
// const request = require('supertest');
// const { app } = require('../../app');

// it('clears the cookie after signing out', async () => {
// 	await request(app)
// 		.post('/api/auth/signup')
// 		.send({
// 			email: 'test@test.com',
// 			password: 'password',
// 		})
// 		.expect(201);
// 	const response = await request(app)
// 		.post('/api/auth/signout')
// 		.send({})
// 		.expect(200);
// it('clears the cookie after signing out', async () => {
// 	await request(app)
// 		.post('/api/auth/signup')
// 		.send({
// 			email: 'test@test.com',
// 			password: 'password',
// 		})
// 		.expect(201);
// 	const response = await request(app)
// 		.post('/api/auth/signout')
// 		.send({})
// 		.expect(200);

// 	console.log(response.get('Set-Cookie'));
// 	expect(response.get('Set-Cookie')[0]).toEqual(
// 		'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
// 	);
// }
