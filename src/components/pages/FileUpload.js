// import { Button } from '@material-ui/core'
// import React, { useState } from 'react'
// import { db, storage } from '../../firebase';
// export default function FileUpload({ caption }) {
//     const [image, setImage] = useState(null)
//     const [progress, setProgress] = useState(0)
//     const handleChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     }
//     const handleUpload = () => {
//         const uploadTask = storage.ref(`images/${image.name}`).put(image);
//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//                 setProgress(progress);
//             },
//             (error) => {
//                 console.log(error);
//                 alert(error.message);
//             },
//             () => {
//                 storage
//                     .ref("images")
//                     .child(image.name)
//                     .getDownloadURL()
//                     .then(url => {
//                         db.collection("posts")
//                             .add(
//                                 {
//                                     image: url
//                                 }, { merge: true }
//                             );
//                     });
//                 setProgress(0);
//                 setImage(null);
//             }
//         )

//     }
//     return (
//         <div>
//             <input type="file" onChange={handleChange} />
//             <Button onClick={handleUpload}>Upload</Button>
//         </div>
//     )
// }
