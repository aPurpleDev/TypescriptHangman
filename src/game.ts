import { Word } from "./data";

// Etat du jeu
export enum Status {
    Winner,
    Loser,
    Progress
}

export class Game {

    private _attempts: number; // nombre de coups
    private readonly _maxAttempts: number = 7; // définir le nombre de coups max en lecture seule
    private _word: string; // mot à devnier en clair
    private _hiddenWord: string; // caché le mot
    private _status: Status; // état du jeu Progress, Winner ou Loser
    private _message: string; // message à destination du joueur

    constructor(private _words: Array<Word>) {
        this.init(_words); 
    }

    /**
     * init : intialiser le jeu 
     * 
     * @param words 
     */
    init(words: Array<Word>): void
    {
      let currentWords = words[0]; //ajouter Shift
        words.splice(0,1);

      let {word, hide} = currentWords;
      let that = this;

      function run(choice: string)
      {
          if (choice.toLowerCase() === word.toLowerCase())
          {
              return that.status = Status.Winner;
          }

          let progressIndex = 0;
          let charsToReveal = [];

          for(let i = 0; i < words.length; i++)
          {
              if (choice.charAt(i) == word.charAt(i))
              {
                  progressIndex = i;
                  charsToReveal.push(i);
              }
          }
              if (progressIndex > 0 && charsToReveal.length > 0)
              {
                  charsToReveal.forEach(function (value)
                      {
                      let hideArray = hide.split('');
                      let wordArray = word.split('');

                      hideArray[value] = wordArray[value];

                      hide = hideArray.join('');
                      }
                  );

                  return that.status = Status.Progress;
              }

          if(words.length > 0)
          {

              that.init(words);
          }
      }
    }

    // getter et setter
    get status(): Status { return this._status; }
    set status(status: Status) { this._status = status; }
    get message(): string { return this._message; }
    // gestion de l'utilisateur : setter et getter
    get attemtps(): number { return this._attempts; }

    /**
    * isWord : test boolean si le mot est celui que l'on cherche ou non
    * 
    * @param word 
    */
    isWord(word: string) {
        let currentWords = Word[Object.keys(Word)[0]];
        let {theWord, hide} = currentWords;

        if(word == theWord)
        {
            return true;
        }
        return false;
    }

    /**
     * show : affiche le mot caché à deviner
     */
    show(): string {
        let currentWords = Word[Object.keys(Word)[0]];
        let {theWord, hide} = currentWords;
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