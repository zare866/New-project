 
const imageForm = document.querySelector("imageForm")
const imageInput = document.querySelector("imageForm")

imageForm.addEventListener("submit,async event=>{
    event.preventdefauld()
    const file=image.files[0]
// get secure url from our server
const{url fetch ("s3uRL").then(res=> res.json())
    console.log(url)
//post image directly to the s3 bucket
fetch({
    method:"PUT",
    headers:{
        "content-type":"multipart/form-date"
    }
})
const imageURL=url.split('?')[0]
console.log(imageURL)
//post request to my sever to store any extra data 
const img =document.createElement("image")
image.src=imageURL
document.body.appendChild(image)

})