/* eslint-disable no-undef */
import { config } from 'dotenv';
config();


export default {
	baseUrl: process.env.API_URL || 'http://localhost:3000',
	docsUrl: process.env.DOCS_URL,
	mongodbURL: process.env.MONGODB_URI || 'mongodb://Localhost/EDN',
	jwtKey: process.env.JWT_PASS,
	env: process.env.ENVIRONMENT, 
	port: process.env.PORT || 3000,
	host: process.env.HOST
};
