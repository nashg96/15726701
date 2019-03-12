import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';


@IonicPage()
@Component({
  selector: 'page-viewnote',
  templateUrl: 'viewnote.html',
})
export class ViewnotePage {
	note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private noteService: NoteService) {
  	this.note = this.navParams.get('note');
  }

  deleteNote(createDate: Number) {
  	this.noteService.deleteNote(createDate);
  	this.navCtrl.pop();
  }

}
