import React, { useState, useEffect } from 'react';
import { sections } from './data';
import { CheckCircle2, Circle, FlaskConical, Microscope, Beaker, Info, ShoppingCart } from 'lucide-react';

export default function App() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('livs-labor-checked');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('livs-labor-checked', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completedItems / totalItems) * 100);

  const calculateTotalCost = () => {
    let minTotal = 0;
    let maxTotal = 0;
    
    sections.forEach(section => {
      section.items.forEach(item => {
        const matches = item.price.match(/\d+/g);
        if (matches) {
          if (matches.length === 1) {
            minTotal += parseInt(matches[0], 10);
            maxTotal += parseInt(matches[0], 10);
          } else if (matches.length >= 2) {
            minTotal += parseInt(matches[0], 10);
            maxTotal += parseInt(matches[1], 10);
          }
        }
      });
    });
    
    return { minTotal, maxTotal };
  };

  const getScientificFields = () => {
    const fields = new Set<string>();
    sections.forEach(section => {
      section.items.forEach(item => {
        fields.add(item.category);
      });
    });
    return Array.from(fields).sort();
  };

  const { minTotal, maxTotal } = calculateTotalCost();
  const scientificFields = getScientificFields();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-24">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
                <Microscope size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-900">Livs Labor</h1>
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">Finale Einkaufsliste</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-indigo-600">{progress}%</div>
              <div className="w-16 h-2 bg-stone-100 rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        
        {/* Intro */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
          <div className="flex gap-4">
            <div className="text-amber-500 shrink-0">
              <Info size={24} />
            </div>
            <div className="space-y-2 text-sm text-stone-600">
              <p>
                <strong className="text-stone-900">Kurz erklärt:</strong> Die Links sind stabile Amazon-Suchlinks, damit immer aktuelle Produkte, Preise und Verkäufer angezeigt werden.
              </p>
              <p>
                Kein unnötiger Overkill, aber alles, was ein kleines echtes Heimlabor für eine 8-jährige Forscherin braucht.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map(section => (
            <section key={section.id} className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-sm text-stone-500 mt-1">{section.description}</p>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden divide-y divide-stone-100">
                {section.items.map(item => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div 
                      key={item.id}
                      className={`group flex items-start gap-4 p-4 transition-colors hover:bg-stone-50 ${isChecked ? 'bg-stone-50/50' : ''}`}
                    >
                      <button 
                        onClick={() => toggleItem(item.id)}
                        className="shrink-0 mt-0.5 text-stone-300 hover:text-indigo-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
                      >
                        {isChecked ? (
                          <CheckCircle2 className="text-emerald-500" size={24} />
                        ) : (
                          <Circle size={24} />
                        )}
                      </button>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-600 uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="text-xs font-medium text-stone-500">
                            ~ {item.price}
                          </span>
                        </div>
                        <p className={`text-sm font-medium transition-colors ${isChecked ? 'text-stone-400 line-through' : 'text-stone-900'}`}>
                          {item.name}
                        </p>
                      </div>

                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`shrink-0 p-2 rounded-lg transition-colors ${isChecked ? 'text-stone-300 hover:text-stone-500 hover:bg-stone-100' : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'}`}
                        title="Auf Amazon suchen"
                      >
                        <ShoppingCart size={18} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 shadow-lg mt-12">
          <div className="flex items-start gap-4">
            <div className="bg-stone-800 p-3 rounded-xl shrink-0">
              <FlaskConical size={24} className="text-emerald-400" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">Gesamtpreis</h3>
                <p className="text-stone-400 text-sm mt-1">Wenn ihr alles kauft: <strong className="text-white">ca. {minTotal} € – {maxTotal} €</strong></p>
              </div>
              
              <div className="pt-4 border-t border-stone-800">
                <p className="text-sm text-stone-300">Damit hat Liv:</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {scientificFields.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-stone-800 text-xs font-medium text-stone-300 border border-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-emerald-400 mt-4">
                  Also ein echtes kleines Forschungslabor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outro */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-2">Eine kleine Beobachtung zum Schluss.</h4>
          <p className="text-sm text-indigo-800 mb-4">
            Kinder, die ein Labor bekommen, benutzen am Anfang begeistert alles. Nach zwei Wochen bleiben meist zwei Dinge übrig, die wirklich dauerhaft genutzt werden:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2 text-sm font-bold text-indigo-900">
              <Microscope size={16} className="text-indigo-500" /> Mikroskop
            </li>
            <li className="flex items-center gap-2 text-sm font-bold text-indigo-900">
              <Beaker size={16} className="text-indigo-500" /> Laborbuch
            </li>
          </ul>
          <p className="text-sm text-indigo-800 italic">
            "Wenn Liv wirklich Wissenschaftlerin werden will, wird genau dieses Buch irgendwann voller Experimente sein. Und das ist meistens der Moment, an dem so ein Projekt wirklich funktioniert."
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-stone-400">
          Open Source auf{' '}
          <a
            href="https://github.com/voku/LaborShoppingList"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
