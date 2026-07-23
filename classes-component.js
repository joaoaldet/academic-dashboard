class ClassesComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('classes.json');
      const classes = await response.json();

      this.render(classes);
    } catch (error) {
      console.error('Error loading class data:', error);
    }
  }

  render(classes) {
    const classesToday = classes.filter(
      c => c.data === this.hoje
    );

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'classes-component.css';

    this.shadowRoot.appendChild(style);

    const container = document.createElement('div');

    container.innerHTML = `
      ${classesToday.map(c => {

        let examDisplay = c.prova_alert ? '' : 'display: none;';

        let gradeClass = '';

        const grade = parseFloat(c.nota);

        if (grade < 6) {
          gradeClass = 'grade-red';
        } 
        else if (grade >= 6 && grade < 8) {
          gradeClass = 'grade-orange';
        } 
        else {
          gradeClass = 'grade-green';
        }

        return `
          <div class="class-card">

            <div class="exam-label label" style="${examDisplay}">
              EXAM: <b>${c.prova}</b>
            </div>

            <div class="class-title">
              ${c.disciplina}
            </div>

            <p>
              Location and Time:
              <b>${c.local} - ${c.horario}</b>
            </p>

            <div class="labels">

              <div class="attendance-label label">
                ABSENCES:
                <b>${c.frequencia}</b>
              </div>

              <div class="grade-label label ${gradeClass}">
                GRADE:
                <b>${c.nota}</b>
              </div>

            </div>

          </div>
        `;

      }).join('')}
    `;

    this.shadowRoot.appendChild(container);
  }
}

customElements.define(
  'classes-component',
  ClassesComponent
);
