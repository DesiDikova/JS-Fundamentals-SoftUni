function songs(songsInfo) {

    let numberSongs = songsInfo.shift(); //взимам първият елемент - броя песни
    let typeSong = songsInfo.pop(); //взимам последния елемент - вид песен

    //създавам class Song
    class Song {
        constructor(typeList, songName, time) {
            this.typeList = typeList;
            this.songName = songName;
            this.time = time;
        }
    }

    let newSongs = [];
    for (let songInfo of songsInfo) {
        [typeList, songName, time] = songInfo.split('_');

        let song = new Song(typeList, songName, time);
        
        newSongs.push(song);

        if (typeList === typeSong || typeSong === 'all') {
            console.log(songName)
        }    
    }
}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);