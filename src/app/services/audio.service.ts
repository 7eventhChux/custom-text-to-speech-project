import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audioFiles: any = {
    Igbo: [
      { id: 1,bindValue:'Good morning', label: 'Good morning : Ìbòóla Chi', audio: './assets/audiorecords/igbowords/igbogoodmorning.ogg' },
      { id: 2,bindValue:'Good afternoon', label: 'Good afternoon : Ndeewo', audio: './assets/audiorecords/igbowords/igbogoodafternoon.ogg' },
      { id: 3,bindValue:'Good night', label: 'Good night : Kachifo', audio: './assets/audiorecords/igbowords/igbogoodnight.ogg' },
      { id: 4,bindValue:'Welcome', label: 'Welcome : Nnor', audio: './assets/audiorecords/igbowords/igbowelcome.ogg' },
      { id: 5,bindValue:'Thankyou', label: 'Thankyou : Daalu', audio: './assets/audiorecords/igbowords/igbothankyou.ogg' },
      { id: 6,bindValue:'Eat', label: 'Eat : Rie', audio: './assets/audiorecords/igbowords/igboeat.ogg' },
      { id: 7,bindValue:'Water', label: 'Water : Mmiri', audio: './assets/audiorecords/igbowords/igbowater.ogg' },
      { id: 8,bindValue:'Run', label: 'Run : Ọsọ̀', audio: './assets/audiorecords/igbowords/igborun.ogg' },
      { id: 9,bindValue:'Goodbye', label: 'Goodbye : Ka ọ̀ di', audio: './assets/audiorecords/igbowords/igbogoodbye.ogg' },
      { id: 10,bindValue:'Go', label: 'Go : Gawa', audio: './assets/audiorecords/igbowords/igbogo.ogg' },
      { id: 11,bindValue:'Come', label: 'Come : Bia', audio: './assets/audiorecords/igbowords/igbocome.ogg' },
    ],
    Yoruba: [
      { id: 1,bindValue:'Good morning', label: 'Good morning : Eka aro', audio: './assets/audiorecords/yorubawords/yorubagoodmorning.ogg' },
      { id: 2,bindValue:'Good afternoon', label: 'Good afternoon : Eka aso', audio: './assets/audiorecords/yorubawords/yorubagoodafternoon.ogg' },
      { id: 3,bindValue:'Good night', label: 'Good night : Uda aro', audio: './assets/audiorecords/yorubawords/yorubagoodnight.ogg' },
      { id: 4,bindValue:'Welcome', label: 'Welcome : Eka abo', audio: './assets/audiorecords/yorubawords/yorubawelcome.ogg' },
      { id: 5,bindValue:'Thankyou', label: 'Thankyou : Oshe', audio: './assets/audiorecords/yorubawords/yorubathankyou.ogg' },
      { id: 6,bindValue:'Eat', label: 'Eat : Je un', audio: './assets/audiorecords/yorubawords/yorubaeat.ogg' },
      { id: 7,bindValue:'Water', label: 'Water : Oomi', audio: './assets/audiorecords/yorubawords/yorubawater.ogg' },
      { id: 8,bindValue:'Run', label: 'Run : Saare', audio: './assets/audiorecords/yorubawords/yorubarun.ogg' },
      { id: 9,bindValue:'Goodbye', label: 'Goodbye : Udabo', audio: './assets/audiorecords/yorubawords/yorubagoodbye.ogg' },
      { id: 10,bindValue:'Go', label: 'Go : Lo', audio: './assets/audiorecords/yorubawords/yorubago.ogg' },
      { id: 11,bindValue:'Come', label: 'Come : Wa', audio: './assets/audiorecords/yorubawords/yorubacome.ogg' },
    ],
    Hausa: [
      { id: 1,bindValue:'Good morning', label: 'Good morning : Ina kwana', audio: './assets/audiorecords/hausawords/hausagoodmorning.ogg' },
      { id: 2,bindValue:'Good afternoon', label: 'Good afternoon : Ina wuni', audio: './assets/audiorecords/hausawords/hausagoodafternoon.ogg' },
      { id: 3,bindValue:'Good night', label: 'Good night : Sai da safe', audio: './assets/audiorecords/hausawords/hausagoodnight.ogg' },
      { id: 4,bindValue:'Welcome', label: 'Welcome : Sannu da zuwa', audio: './assets/audiorecords/hausawords/hausawelcome.ogg' },
      { id: 5,bindValue:'Thankyou', label: 'Thankyou : Na gode', audio: './assets/audiorecords/hausawords/hausathankyou.ogg' },
      { id: 6,bindValue:'Eat', label: 'Eat : Chi', audio: './assets/audiorecords/hausawords/hausaeat.ogg' },
      { id: 7,bindValue:'Water', label: 'Water : Ruwa', audio: './assets/audiorecords/hausawords/hausawater.ogg' },
      { id: 8,bindValue:'Run', label: 'Run : Gudu', audio: './assets/audiorecords/hausawords/hausarun.ogg' },
      { id: 9,bindValue:'Goodbye', label: 'Goodbye : Sai an jima ', audio: './assets/audiorecords/hausawords/hausagoodbye.ogg' },
      { id: 10,bindValue:'Go', label: 'Go : Tafi', audio: './assets/audiorecords/hausawords/hausago.ogg' },
      { id: 11,bindValue:'Come', label: 'Come : Zo', audio: './assets/audiorecords/hausawords/hausacome.ogg' },
    ],
  };

  constructor() {}

  getAudioFiles(): any {
    return this.audioFiles;
  }
}
