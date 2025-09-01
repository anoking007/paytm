const express = require('express');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

const authMiddleware =(req, res, next) =>{
    const auth = req.headers.authorization; // Corrected spelling of 'authorization'
    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }

    const token = auth.split(' ')[1];
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET); // Assuming JWT.secret is the property where you store your JWT secret
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {
    authMiddleware
};
