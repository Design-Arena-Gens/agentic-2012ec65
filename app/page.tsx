"use client";

import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const microorganismData = [
  { name: 'E. coli', percentage: 32.5, color: '#ef4444' },
  { name: 'GBS', percentage: 27.5, color: '#3b82f6' },
  { name: 'S. pneumoniae / N. meningitidis', percentage: 12.5, color: '#10b981' },
  { name: 'L. monocytogenes', percentage: 7.5, color: '#f59e0b' },
  { name: 'Diğer', percentage: 20, color: '#6b7280' },
];

const incidenceData = [
  { group: 'Normal Bebekler\n(29-90 gün)', rate: 1.5 },
  { group: 'NICU Prematüre\nBebekler', rate: 6 },
];

const mortalityData = [
  { scenario: 'Erken Tanı ve\nUygun Tedavi', rate: 7.5 },
  { scenario: 'Gecikmeli\nTedavi', rate: 30 },
];

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#6b7280'];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Geç Başlangıçlı Neonatal Sepsis
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Epidemiyolojik Özellikler (2020-2025)
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Normal Bebek İnsidansı</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1-2%</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">29-90 gün arası</p>
              </div>
              <div className="text-5xl">👶</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">NICU Prematüre İnsidansı</p>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">5-7%</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">Yüksek risk grubu</p>
              </div>
              <div className="text-5xl">🏥</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Mortalite (Erken Tanı)</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">5-10%</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">Uygun antibiyotik tedavisi ile</p>
              </div>
              <div className="text-5xl">✅</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Microorganism Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Mikroorganizma Dağılımı
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={microorganismData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} (${percentage}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {microorganismData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {microorganismData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Incidence Rates */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              İnsidans Oranları
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incidenceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="group" tick={{ fontSize: 12 }} />
                <YAxis label={{ value: 'IBI Oranı (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="rate" fill="#3b82f6" name="IBI Oranı (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mortality Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Mortalite Karşılaştırması
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mortalityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="scenario" tick={{ fontSize: 12 }} />
              <YAxis label={{ value: 'Mortalite Oranı (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="rate" fill="#10b981" name="Mortalite (%)" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Önemli:</strong> Gecikmeli tedavide mortalite %30'a kadar artabilir. Erken tanı kritik önem taşır.
            </p>
          </div>
        </div>

        {/* Microorganism Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Mikroorganizma Özellikleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                E. coli (30-35%)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Özellikle prematüre bebeklerde en sık görülen etken. Gram-negatif bakterilerin başında gelir.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                GBS (25-30%)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Doğum sonrası erken dönemde hâlâ önemli bir etken. Grup B Streptokok infeksiyonları.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                L. monocytogenes (5-10%)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Özellikle maternal listeriosis öyküsü varsa dikkat edilmeli. Gıda kaynaklı enfeksiyon.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                S. pneumoniae / N. meningitidis (10-15%)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Aşı programlarının etkisiyle azalma eğiliminde. Düşük bağışıklık durumunda risk artar.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Presentation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Klinik Sunum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔥</span> Sepsis Belirtileri
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  İrritabilite (huzursuzluk, aşırı ağlama)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Beslenme bozukluğu (emmede azalma)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Hipotermi veya hipertermi
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Solunum sıkıntısı (apne, takipne)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Letarji veya hipotoni
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                <span className="text-2xl mr-2">🧠</span> Meningit Belirtileri
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Bulantı ve kusma
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Fontanel bombeleşmesi (bebeklerde)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Meningeal irritasyon işaretleri
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Konvülsiyonlar (nöbetler)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Yüksek ateş veya hipotermiya
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagnostic Approach */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Tanı Yaklaşımı
          </h2>
          <div className="space-y-4">
            <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <span className="text-2xl mr-3">🩺</span>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Laboratuvar Testleri</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tam kan sayımı, CRP, prokalsitonin, kan kültürü, idrar kültürü
                </p>
              </div>
            </div>

            <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <span className="text-2xl mr-3">💉</span>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Lomber Ponksiyon</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Meningit şüphesinde BOS analizi, kültür ve gram boyama
                </p>
              </div>
            </div>

            <div className="flex items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <span className="text-2xl mr-3">📊</span>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Görüntüleme</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Göğüs röntgeni, kranial ultrason veya MRI (endikasyon varsa)
                </p>
              </div>
            </div>

            <div className="flex items-start bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <span className="text-2xl mr-3">⏱️</span>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Acil Değerlendirme</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  İlk 1 saat içinde kültürler alınmalı ve empirik antibiyotik tedavisi başlatılmalıdır
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Veriler 2020-2025 arası güncel epidemiyolojik çalışmalardan derlenmiştir.</p>
          <p className="mt-2">Bu dashboard eğitim amaçlıdır. Klinik kararlar için mutlaka güncel kılavuzlara başvurun.</p>
        </div>
      </div>
    </div>
  );
}
