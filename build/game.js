"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
// Etat du jeu
var Status;
(function (Status) {
    Status[Status["Winner"] = 0] = "Winner";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Progress"] = 2] = "Progress";
})(Status = exports.Status || (exports.Status = {}));
class Game {
    constructor(_words) {
        this._words = _words;
        this._maxAttempts = 7; // définir le nombre de coups max en lecture seule
        this.init(_words);
    }
    /**
     * init : intialiser le jeu
     *
     * @param words
     */
    init(words) {
        let currentWords = words.shift();
        let { word, hide } = currentWords;
        let that = this;
        function run(choice) {
            if (choice.toLowerCase() === word.toLowerCase()) {
                return that.status = Status.Winner;
            }
            let progressIndex = 0;
            let charsToReveal = [];
            for (let i = 0; i < words.length; i++) {
                if (choice.charAt(i) == word.charAt(i)) {
                    progressIndex = i;
                    charsToReveal.push(i);
                }
            }
            if (progressIndex > 0 && charsToReveal.length > 0) {
                charsToReveal.forEach(function (value) {
                    let hideArray = hide.split('');
                    let wordArray = word.split('');
                    hideArray[value] = wordArray[value];
                    hide = hideArray.join('');
                });
                return that.status = Status.Progress;
            }
            if (words.length > 0) {
                that.init(words);
            }
        }
    }
    // getter et setter
    get status() { return this._status; }
    set status(status) { this._status = status; }
    get message() { return this._message; }
    // gestion de l'utilisateur : setter et getter
    get attemtps() { return this._attempts; }
    /**
    * isWord : test boolean si le mot est celui que l'on cherche ou non
    *
    * @param word
    */
    isWord(word) {
        let currentWords = data_1.Word[Object.keys(data_1.Word)[0]];
        let { theWord, hide } = currentWords;
        if (word == theWord) {
            return true;
        }
        return false;
    }
    /**
     * show : affiche le mot caché à deviner
     */
    show() {
        let currentWords = data_1.Word[Object.keys(data_1.Word)[0]];
        let { theWord, hide } = currentWords;
        return theWord;
    }
    /**
     * run: logique du jeu
     *
     * @param choice
     */
    //run(choice: string): void {
    //}
    /**
     * final: affiche l'état du jeu à la fin
     */
    final() {
    }
}
exports.Game = Game;
