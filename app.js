// // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

// const token = 'BQBOw-7pKYjf1KbYRkHVaoaI-MM2pchWxNDMoRUVh1RHek4FnuMvWim5dYOpozux06y6aPYsL5RCv5OzWNSUfprqLGj3Fe-fikcW1fAR8fB4E-VWAvokT-Jcw5_Ly6llabpxIW5KGDp8iEQepKkwpWIXVaxLlC09KJaNFsAn2VhDBfZ0yqhpKmy9CPQdW6H18Lrv3x88DJ6hBzr2MhdNubS6J78omTIy5aZQPdHe204jc2eNfioxbDgnQN3og450_SmBJFVUav3lfPBYrvOsNjVt';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//   )).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );


// const APIController = (function () {

//   const clientId = '206c47e4828c4bdbb78d29e19d9af032';
//   const clientSecret = 'cdd57cad295740c5b2e46ec60257e3c3';

//   //private method
//   const _getToken = async () => {
//     const result = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/x-www-from-urlencoded',
//         'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
//       },
//       body: 'grant_type=client_credentials'
//     });

//     const data = await result.json();
//     return data.access_token;
//     console.log(result.json());
//   }
//   const _getGenres = async (token) => {
//     const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
//       method: 'GET',
//       headers: { 'authorization': 'Bearer' + token }
//     });
//     const data = await result.json();
//     return data.categories.items;
//   }

//   const _getPlaylistByGenres = async (token, genreId) => {
//     const limit = 10;

//     const result = await fatch('https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}', {
//       method: 'GET',
//       headers: { 'authorization': 'Bearer' + token }
//     });
//     const data = await result.json();
//     return data.playlists.items;
//   }

//   const _getTracks = async (token, tracksEndPoint)=>{
//     const limit = 10;

//     const result = await fatch('${tracksEndPoint}?limit=${limit}', {
//       method: 'GET',
//       headers: { 'authorization': 'Bearer' + token }
//     });
//     const data = await result.json();
//     return data.items;
//   }
//   const _getTrack =async (token , trackEndPoint)=>{

//     const result = await fatch('${trackEndPoint}', {
//       method: 'GET',
//       headers: { 'authorization': 'Bearer' + token }
//     });
//     const data = await result.json();
//     return data;
//   }
// })

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var requestOptions = {
//     method: "get",
//     headers: myHeaders,
//     redirect: "follow",
    
// };

// fetch("https://v1.nocodeapi.com/tarush/spotify/gtjevpdFedPQnbOI/search?q=<q>", requestOptions)
//     .then(response => response.text())
//     .then(result => console.dir(result))
//     .catch(error => console.log('error', error));

    