from flask import Flask, render_template

app = Flask(__name__)

# Nos 5 défis pour la Nuit de l'Info
DEFIS = [
    {"id": 1, "titre": "1. L'ergonomie : simplifier pour mieux vivre"},
    {"id": 2, "titre": "2. Sésame ouvre-toi"},
    {"id": 3, "titre": "3. Hidden Snake"},
    {"id": 4, "titre": "4. La Carte des Talents"},
    {"id": 5, "titre": "5. La Ligue des Extensions : Manisfestement à jour, open source et utile"}
]

@app.route('/')
def index():
    # On passe la liste pour le menu
    return render_template('index.html', defis=DEFIS)

@app.route('/defi/<int:id>')
def voir_defi(id):
    # On cherche quel défi on veut afficher
    le_defi = next((d for d in DEFIS if d["id"] == id), None)
    
    # On repasse la liste 'defis' pour que le menu reste affiché !
    return render_template('defi.html', defi=le_defi, defis=DEFIS)

if __name__ == '__main__':
    app.run(debug=True)