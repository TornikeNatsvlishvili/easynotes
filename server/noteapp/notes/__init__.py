from flask import Blueprint, render_template

from .views.notes import Notes

notes = Blueprint('notes', __name__)

notes.add_url_rule('/<objectid:note_id>', view_func=Notes.as_view('note'))
notes.add_url_rule('', view_func=Notes.as_view('notes'), defaults={'note_id': None})
