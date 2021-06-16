const { Console } = require("console");
const fs = require("fs");
const chalk = require("chalk");
const print = console.log;

const loadNotes = function () {
  try {
    const data = fs.readFileSync("Notes.json");
    const dataBuffer = data.toString();

    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};
const getNotes = function () {
  return "Your notes...";
};
const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicate = notes.filter(function (note) {
    return note.title === title || note.body === body;
  });
  if (duplicate.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    print(chalk.green.bold(" Note Added"));

    return savenotes(notes);
  } else {
    print(chalk.green.bold("Note Not Added"));
  }
};
const removeNotes = function (title) {
  const notes = loadNotes();
  const duplicate = notes.filter(function (note) {
    return note.title !== title;
  });

  if (duplicate.length === notes.length) {
    print(chalk.red.bold("No Note removed"));
  } else {
    print(chalk.green.bold("Note removed"));

    return savenotes(duplicate);
  }
};
const listNotes = function () {
  const notes = loadNotes();

  return notes.forEach((task) => console.log(task.title));
};

const readNotes = function (title) {
  const notes = loadNotes();
  const note = notes.find((task) => task.title === title);

  if (note) {
    print(chalk.green.bold(note.title));
  } else {
    print(chalk.green.bold("Note not found"));
  }
};
const savenotes = function (notes) {
  return fs.writeFileSync("Notes.json", JSON.stringify(notes));
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
