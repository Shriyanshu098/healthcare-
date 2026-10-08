/**
 * OxyAltitude - Storage & Profile Manager
 * Simple, reliable local storage for assessment history
 * Team Warriors (Ramjali Dilip, Mishra Shriyanshu, Akash)
 */

const OxyStorage = {
  KEY: 'oxy_altitude_records',
  USER_KEY: 'oxy_altitude_active_user',

  TEAM_MEMBERS: [
    { name: 'Shriyanshu Mishra', id: '24151552', email: 'shriyanshumishra2@gmail.com', role: 'Team Member' },
    { name: 'Dilip Ramjali', id: '24151017', email: 'ramjalidilipramjali@gmail.com', role: 'Team Lead' },
    { name: 'Akash', id: '24151479', email: 'Ay376648@gmail.com', role: 'Team Member' }
  ],

  init() {
    if (!localStorage.getItem(this.USER_KEY)) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.TEAM_MEMBERS[0]));
    }

    if (!localStorage.getItem(this.KEY)) {
      this.seedInitialData();
    }
  },

  getActiveUser() {
    try {
      const data = localStorage.getItem(this.USER_KEY);
      return data ? JSON.parse(data) : this.TEAM_MEMBERS[0];
    } catch (e) {
      return this.TEAM_MEMBERS[0];
    }
  },

  setActiveUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  },

  getAllAssessments() {
    try {
      const raw = localStorage.getItem(this.KEY);
      const list = raw ? JSON.parse(raw) : [];
      return list.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (e) {
      return [];
    }
  },

  saveAssessment(result) {
    const list = this.getAllAssessments();
    const user = this.getActiveUser();

    const record = {
      id: 'REC-' + Math.floor(1000 + Math.random() * 9000),
      userName: user.name,
      altitude: result.altitude,
      spo2: result.spo2,
      heartRate: result.heartRate,
      age: result.age,
      category: result.category,
      badgeClass: result.badgeClass,
      summaryText: result.summaryText,
      activeSymptoms: result.activeSymptoms,
      adviceList: result.adviceList,
      timestamp: new Date().toISOString()
    };

    list.unshift(record);
    localStorage.setItem(this.KEY, JSON.stringify(list));
    return record;
  },

  deleteAssessment(id) {
    let list = this.getAllAssessments();
    list = list.filter(item => item.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(list));
    return list;
  },

  clearAll() {
    localStorage.setItem(this.KEY, JSON.stringify([]));
  },

  seedInitialData() {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;

    const sampleRecords = [
      {
        id: 'REC-1021',
        userName: 'Shriyanshu Mishra',
        altitude: 2050,
        spo2: 97,
        heartRate: 72,
        age: 21,
        category: 'Low Risk',
        badgeClass: 'low',
        summaryText: 'Normal physiological adaptation. Oxygen saturation is stable for this elevation.',
        activeSymptoms: [],
        adviceList: ['Continue with planned gradual ascent.', 'Stay well hydrated.'],
        timestamp: new Date(now - 2 * day).toISOString()
      },
      {
        id: 'REC-1044',
        userName: 'Shriyanshu Mishra',
        altitude: 3500,
        spo2: 89,
        heartRate: 84,
        age: 21,
        category: 'Moderate Risk',
        badgeClass: 'moderate',
        summaryText: 'Caution advised: Mild to moderate altitude symptoms or reduced oxygen saturation.',
        activeSymptoms: ['Headache', 'Dizziness'],
        adviceList: ['Halt ascent for 24 hours to acclimatize.', 'Rest and drink 3-4 liters of water.'],
        timestamp: new Date(now - 1 * day).toISOString()
      },
      {
        id: 'REC-1089',
        userName: 'Shriyanshu Mishra',
        altitude: 4800,
        spo2: 74,
        heartRate: 115,
        age: 21,
        category: 'High Risk',
        badgeClass: 'high',
        summaryText: 'Critical warning: Severe oxygen desaturation or acute altitude illness symptoms detected.',
        activeSymptoms: ['Headache', 'Shortness of Breath at Rest'],
        adviceList: ['Descend immediately by at least 500 to 1,000 meters.', 'Do not ascend further.'],
        timestamp: new Date(now - 4 * 60 * 60 * 1000).toISOString()
      }
    ];

    localStorage.setItem(this.KEY, JSON.stringify(sampleRecords));
  },

  exportCSV() {
    const list = this.getAllAssessments();
    if (!list.length) return alert('No records found to export');

    const headers = ['Record ID', 'Date & Time', 'User', 'Altitude (m)', 'SpO2 (%)', 'Heart Rate (bpm)', 'Risk Level', 'Symptoms'];
    const rows = list.map(r => [
      r.id,
      new Date(r.timestamp).toLocaleString().replace(',', ' '),
      `"${r.userName}"`,
      r.altitude,
      r.spo2,
      r.heartRate,
      r.category,
      `"${r.activeSymptoms?.join(', ') || 'None'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'altitude_health_records.csv');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};

if (typeof window !== 'undefined') {
  window.OxyStorage = OxyStorage;
}
