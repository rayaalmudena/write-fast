let Watch = {
    startTime: 0,

    /**
     * Empieza a contar en milisegundos
     */
    startWatch() {
        this.startTime = new Date().getTime()
    },

    /**
     * 
     * @returns number Milisegundos entre que hicimos 
     */
    stopWatch() {

        if (this.startTime == 0) {
            throw "No has iniciado el cronómetro con startWatch."
        }


        let ms = new Date().getTime() - this.startTime;
        this.startTime = 0;
        return ms;

    }

}

