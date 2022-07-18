import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTopTracks() {
    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e4fa1fc549e120ade9ceaa37720008c2&format=json&limit=10`)
      .pipe(
        map(({ tracks }: any) => tracks.track)
      );
  }

  getTrackAlbumArt(artist: string, name: string) {
    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=e4fa1fc549e120ade9ceaa37720008c2&artist=${artist}&track=${name}&format=json`);
  }

  getYoutubeVideo(query: string) {
    return this.http.get(`https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyA1eCXG_0cGYvjEriR8dlla8h4HaYNAHMY`);
  }

}
