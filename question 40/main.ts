function make_album(artist_name: string, album_title: string , tracks?:number){
    let album : {artist :string, title :string , tracks?:number}={
        artist:artist_name,
        title:album_title
    };
    if(tracks !== undefined){
        album.tracks=tracks;

    }
    return album;

}

// calling three functions and create three variable with different value
let album1 = make_album("Aqsa","Album_title 1")
console.log(album1)

let album2 = make_album("Alisha","Album_title 2",10)
console.log(album2)

let album3 = make_album("Ali","Album_title 3")
console.log(album3)