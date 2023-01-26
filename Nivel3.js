class Cursos {
  constructor(back, front) {
    this.back = back;
    this.front = front;
  }
}

function creadorObjetos( backend, frontend) {
   return new Cursos( backend, frontend );
}
console.log(creadorObjetos('NodeJs', 'React'))

console.log(creadorObjetos('Java', 'Angular'))