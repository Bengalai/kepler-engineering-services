const PROJECTS = [
  {
    id: 'booster-pump',
    title: 'Booster Pump Automation System',
    category: 'Water & Utilities',
    badge: 'PLC • HMI • PID • VFD',
    cover: 'assets/projects/booster-panel.webp',
    gallery: ['assets/projects/booster-panel.webp','assets/projects/booster-hmi.webp','assets/projects/booster-skid.webp'],
    intro: 'Complete PLC & HMI-based booster pump automation solution focused on automatic pressure control, PID regulation, VFD speed control, pump sequencing and automatic changeover.',
    details: [
      ['Application', 'Booster pump system'],
      ['Control', 'PLC & HMI based'],
      ['Pressure', 'Automatic pressure control + PID regulation'],
      ['Drives', 'VFD speed control'],
      ['Sequence', 'Pump sequencing + automatic changeover'],
      ['Engineering', 'Installation / testing / commissioning support']
    ],
    architecture: ['Pressure / Field Signals', 'PLC Control', 'HMI', 'VFD Control', 'Pump Skid'],
    deliverables: ['PLC-based control logic', 'HMI operator visualization', 'Automatic pressure control', 'Pump sequencing', 'Automatic changeover', 'Site implementation & testing'],
    impact: 'Designed to improve pressure stability, operator control, pump coordination and day-to-day reliability.'
  },
  {
    id: 'silo',
    title: 'Silo & Material Handling Automation',
    category: 'Process Automation',
    badge: 'CONVEYOR • ELEVATOR • INTERLOCKING',
    cover: 'assets/projects/silo.webp',
    gallery: ['assets/projects/silo.webp'],
    intro: 'Automation for silo and material handling operations, including conveyor and elevator control, motor sequencing, interlocking and process monitoring.',
    details: [
      ['Application', 'Silo & material handling'],
      ['Control', 'PLC-based automation'],
      ['Equipment', 'Conveyors + elevators'],
      ['Logic', 'Motor sequencing + interlocking'],
      ['Monitoring', 'Process monitoring'],
      ['Delivery', 'Automation engineering & integration']
    ],
    architecture: ['Material Infeed', 'PLC Logic', 'Conveyor / Elevator', 'Interlocks', 'Silo Process'],
    deliverables: ['Equipment sequencing', 'Conveyor control', 'Elevator control', 'Motor interlocking', 'Process monitoring', 'Integrated plant operation'],
    impact: 'Built to create coordinated and dependable material movement with clear operator visibility.'
  },
  {
    id: 'boiler',
    title: 'Boiler & Steam System Automation',
    category: 'Process Automation',
    badge: 'BURNER • SAFETY • INSTRUMENTATION',
    cover: 'assets/projects/boiler.webp',
    gallery: ['assets/projects/boiler.webp'],
    intro: 'Upgraded boiler automation and monitoring solution covering burner control, electrical control, safety interlocks and process instrumentation.',
    details: [
      ['Application', 'Boiler & steam system'],
      ['Burner', 'Burner control'],
      ['Safety', 'Safety interlocks'],
      ['Electrical', 'Electrical control integration'],
      ['Instrumentation', 'Process instrumentation'],
      ['Upgrade', 'Existing system modernization']
    ],
    architecture: ['Process Instruments', 'Control Logic', 'Burner Control', 'Safety Interlocks', 'Steam System'],
    deliverables: ['Burner control integration', 'Electrical control', 'Safety interlock logic', 'Process instrumentation integration', 'Monitoring support', 'Existing-system upgrade'],
    impact: 'Focused on safer, more observable and better-coordinated boiler operation.'
  },
  {
    id: 'production-line',
    title: 'Production Line Automation',
    category: 'Manufacturing',
    badge: 'SEQUENCING • MOTOR CONTROL • COORDINATION',
    cover: 'assets/projects/production-line.webp',
    gallery: ['assets/projects/production-line.webp'],
    intro: 'Automation of an existing production line through conveyor control, machine sequencing, motor control and coordinated process operation.',
    details: [
      ['Application', 'Industrial production line'],
      ['Scope', 'Existing line automation'],
      ['Control', 'Conveyor + machine sequencing'],
      ['Motors', 'Motor control'],
      ['Coordination', 'Coordinated process operation'],
      ['Objective', 'Efficiency + reliable performance']
    ],
    architecture: ['Feed / Infeed', 'Sequencing Logic', 'Conveyors', 'Machine Stations', 'Process Output'],
    deliverables: ['Conveyor control', 'Machine sequencing', 'Motor control', 'Coordinated operation', 'Existing-line integration', 'Functional testing'],
    impact: 'Designed to improve line coordination, operational consistency and reliable production flow.'
  },
  {
    id: 'vfd-panel',
    title: 'VFD & Motor Control Panel',
    category: 'Electrical & Drives',
    badge: 'VFD • PLC • PANEL • WIRING',
    cover: 'assets/projects/vfd-panel.webp',
    gallery: ['assets/projects/vfd-panel.webp'],
    intro: 'Designed and wired VFD-based motor control panels, with the required PLC/VFD control programming for industrial applications.',
    details: [
      ['Application', 'Industrial motor control'],
      ['Drive', 'VFD-based motor control'],
      ['Panel', 'Motor control panel design + wiring'],
      ['Control', 'PLC / VFD programming'],
      ['Engineering', 'Hardware + control integration'],
      ['Testing', 'Functional verification']
    ],
    architecture: ['PLC Command', 'VFD', 'Motor', 'Feedback / Status', 'Operator Control'],
    deliverables: ['Panel design', 'Precision wiring', 'VFD configuration', 'PLC/VFD control programming', 'Control integration', 'Testing support'],
    impact: 'A practical drive-and-panel package aimed at controlled motor operation and maintainable electrical infrastructure.'
  },
  {
    id: 'scada',
    title: 'Online SCADA Integration',
    category: 'Digital & SCADA',
    badge: 'PLC • SCADA • REAL-TIME DATA',
    cover: 'assets/projects/scada-panel.webp',
    gallery: ['assets/projects/scada-panel.webp'],
    intro: 'Upgraded and developed an existing PLC control system and integrated an online SCADA system for real-time process monitoring, control and data visualization.',
    details: [
      ['Application', 'Industrial process monitoring'],
      ['Upgrade', 'Existing PLC control system'],
      ['SCADA', 'Online SCADA integration'],
      ['Monitoring', 'Real-time process monitoring'],
      ['Control', 'Supervisory control'],
      ['Visualization', 'Live data visualization']
    ],
    architecture: ['Field / PLC', 'Control Network', 'SCADA', 'Operator Screen', 'Process Data'],
    deliverables: ['PLC system upgrade support', 'SCADA development', 'Real-time monitoring', 'Supervisory control', 'Data visualization', 'Online integration'],
    impact: 'Designed to give operators clearer real-time visibility and a more usable supervisory layer.'
  }
];

const INDUSTRIES = [
  'Edible Oil', 'Food & Feed Processing', 'Water & Wastewater Treatment', 'Oil & Gas',
  'Power Generation', 'Pharmaceuticals & Beverages', 'Steel Rolling & Metal',
  'Chemical Processing', 'Textile & Garment', 'Plastic & Polymer Manufacturing'
];

const SERVICES = [
  ['01', 'Consulting', 'Advanced control concepts, safety, security, energy management and tailor-made plant solutions.', ['Process optimization concepts','Safety & energy strategy','Plant-specific engineering advice']],
  ['02', 'Engineering', 'Automation project management, hardware engineering and PLC, SCADA, MES and IoT software engineering.', ['Control panels & operator stations','PLC / HMI / SCADA software','System integration']],
  ['03', 'Manufacturing', 'Custom control panels, motor control panels, local junction boxes, LV/MV systems and PFI solutions.', ['Motor control & PLC panels','LV/MV distribution','PFI & junction boxes']],
  ['04', 'Commissioning', 'I/O testing, device calibration, dry-run tests, plant commissioning, process start-up and on-site production support.', ['I/O checks & calibration','Dry-run & functional tests','Plant start-up support']],
  ['05', 'IoT & Digital', 'Secure real-time connectivity, predictive maintenance, digital twin concepts, cybersecurity and smart solutions.', ['Real-time connectivity','Predictive maintenance concepts','Cybersecurity & smart sensors']],
  ['06', 'Customer Service', 'Preventative maintenance, emergency support, online/on-site assistance and troubleshooting.', ['Preventive maintenance','Emergency troubleshooting','Online & on-site support']],
  ['07', 'Modernization & Retrofit', 'PLC upgrades, SCADA modernization and retrofitting of legacy systems with current technology.', ['Legacy PLC replacement','SCADA modernization','Performance-focused retrofit']],
  ['08', 'Substation Solutions', 'RTU/relay configuration, SAS SCADA, energy monitoring, LV/MV design, supply, installation and commissioning.', ['RTU / relay configuration','SAS SCADA & monitoring','LV/MV design & commissioning']]
];

const TECH_GROUPS = {
  'PLC': ['Siemens S7-1500', 'Siemens S7-1200', 'Siemens SMART', 'Siemens S7-400', 'Siemens S7-300', 'Siemens S7-200', 'Siemens LOGO', 'Mitsubishi FX1N/FX2N/FX3U', 'Delta DVP-SS/EC/ES', 'Allen-Bradley', 'WAGO', 'Honeywell'],
  'HMI': ['Siemens TP/KTP/MP/SMART', 'Delta HMI', 'Allen-Bradley PanelView', 'Mitsubishi HMI', 'ABB HMI', 'Pro-face HMI'],
  'VFD': ['V&T', 'Delta', 'Fuji Electric', 'Mitsubishi Electric', 'Siemens', 'Danfoss', 'INVT', 'Schneider Electric', 'Yaskawa'],
  'Servo': ['Siemens', 'Mitsubishi Electric', 'Panasonic', 'ABB', 'Delta', 'Wecon', 'Schneider Electric', 'Yaskawa'],
  'Instrumentation': ['Endress+Hauser', 'VEGA', 'Siemens']
};
