import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css', '../../app.component.css'],
})
export class AudioPlayerComponent implements OnInit {
  selectedLanguage: string = ''; 
  searchTerm: string = '';
  matchedAudioFile: any = '';
  audioFiles: any = {};
  filteredAudioFiles: any[] = [];
  noSearchResult: boolean = false;
  audioPlaying: boolean = false;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioFiles = this.audioService.getAudioFiles();
  }

  filterAudio(): void {
    if (this.searchTerm === '') {
      this.filteredAudioFiles = [];
      this.noSearchResult = false;
    } else {
      const languageArray:any = this.audioFiles[this.selectedLanguage];
      const exactMatch = languageArray.find((audioFile:any) =>
      audioFile.bindValue.toLowerCase() === this.searchTerm.toLowerCase()
      );

      if (exactMatch) {
        this.filteredAudioFiles = [exactMatch];
        this.noSearchResult = false;
      } else {
        this.filteredAudioFiles = [];
        this.noSearchResult = true;
      }
    }
  }

  clearSearchTerm(): void {
    this.searchTerm = '';
    this.matchedAudioFile = '';
    this.filterAudio(); 
  }
  
  speakAudio(): void {
    if (this.filteredAudioFiles.length === 1) {
      this.audioPlaying = true;
      const audioFile = this.filteredAudioFiles[0];
      this.matchedAudioFile = audioFile.label;
      console.log(audioFile);
      
      const audioElement = new Audio(audioFile.audio);
      audioElement.play();
    }
  }
  
  
}
