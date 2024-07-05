'use strict'

import mongoose from "mongoose"

export const connect = async()=>{
    try {
        mongoose.connection.on('error', ()=>{
            console.log('MongoDB | Could not be connect to mongodb');
            mongoose.disconnect()
        })
        mongoose.connection.on('connecting', ()=> console.log('MongoDB | Try connecting'))
        mongoose.connection.on('connected', ()=> console.log('MongoDB | connected to MongoDB'))
        mongoose.connection.on('open', ()=> console.log('MongoDB | connected to database'))
        mongoose.connection.on('disconnected', ()=> console.log('MongoDB | disconnected'))
        mongoose.connection.on('reconnected', ()=> console.log('MongoDB | reconnected to MongoDB'))

        return await mongoose.connect('mongodb+srv://incmonster365:incmonster@cluster0.ldym6g7.mongodb.net/BankingSystemAV?retryWrites=true&w=majority&appName=Cluster0')
    } catch (err) {
        console.error('Database connection failed, ',err);
    }
}