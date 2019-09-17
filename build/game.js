"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        function run(choice) {
            if (choice.toLowerCase() === word.toLowerCase()) {
                return Status.Winner;
            }
            let progressIndex = 0;
            let charsToUnhide = [];
            for (let i = 0; i < words.length; i++) {
                if (word.charAt(i) == hide.charAt(i)) {
                    progressIndex = i;
                    charsToUnhide.push(i);
                }
                if (progressIndex > 0 && charsToUnhide.length > 0) {
                    charsToUnhide.forEach(function (value) {
                        let charKept = value;
                        //https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
                    });
                    return Status.Progress;
                }
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
    }
    /**
     * show : affiche le mot caché à deviner
     */
    show() {
        return '...TODO';
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
