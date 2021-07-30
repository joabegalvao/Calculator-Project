class CalcController {
    
    constructor() {

        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        }, 1000);

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEL.innerHTML;
    }

    set displayDate(value){
        this._dateEL.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date;
    }
    set currentDate(value){
        this._currentDate = value;
    }
}