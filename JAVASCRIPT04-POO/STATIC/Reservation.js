class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 100

    static showBaseFee() {
        console.log(Reservation.baseFee)
    }
}

Reservation.showBaseFee()

const teste = new Reservation(3, "200", 4)
console.log(teste.total)

Reservation.baseFee = 200
Reservation.showBaseFee()

const teste2 = new Reservation(2, "201", 6)
console.log(teste2.total)

console.log(teste.total)
console.log(teste2.total)