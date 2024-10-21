import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import {promisify} from "util"
const randomBytes =promisify(crypto.randomBytes)

dotenv.config()
const reion= "us-east-1"
const bucketname="images-upload-s3"
const accessKeyId=process.env.AWS_ACCESS_KEY_ID
const secretAccessKey=process.env.AWS_SECRET_ACESS_KEY

const s3=new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion:'v4'
})
export async function generateUploadURL(){
    const rawBytes=await randomBtes(16)
    const imageName =rawbytes.toString('hex')

    const params =({
        bucket:bucketname,
        key:imageName,
        expires:60
    })
    const UploadURL= await s3.getSignedUrlPromise('putobject',params)
    return UploadURL
}

