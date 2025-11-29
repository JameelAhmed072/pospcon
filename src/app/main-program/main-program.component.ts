import { Component } from '@angular/core';

interface ScheduleRow {
  time?: string;          // Time range (optional for non-time rows)
  topic: string;          // Topic / description
  speaker?: string;       // Speaker name (optional)
  type?: 'qa' | 'break' | 'event'; // For styling / semantics
}

interface Session {
  name: string;           // e.g. Session 1
  subtitle?: string;      // e.g. Hip disorders 1
  note?: string;          // e.g. (Running Tea)
  chairs?: string;       // Session chairs
  moderator?: string;    // Session moderator
  rows: ScheduleRow[];    // Rows inside the session
}

interface ProgramDay {
  label: string;          // Day 00 / Day 01 / Day 02
  date: string;           // Full date string
  heading?: string;       // Optional heading line above tables
  events?: ScheduleRow[]; // Pre-conference events etc
  sessions?: Session[];   // Academic sessions
}

@Component({
  selector: 'app-main-program',
  templateUrl: './main-program.component.html',
  styleUrls: ['./main-program.component.css']
})
export class MainProgramComponent {
  title = 'Early Scientific program';
  conferenceCode = 'POSPCON-2026';
  conferenceDates = 'Friday & Saturday, 3rd & 4Th April 2026';
  venue = 'Hotel Serina, Quetta. Baluchistan';

  // Program data
  days: ProgramDay[] = [
    {
      label: 'Day 00',
      date: 'Thursday, 2nd April 2026',
      events: [
        { time: '09:00 – 16:00', topic: 'Interactive Course: Paediatric Fractures & Tumours @ PGMI Quetta', type: 'event' },
        { time: '16:00 PM', topic: 'INAUGURATION of POSPCON-2026 @ PGMI Quetta', type: 'event' },
        { time: '20:00 PM', topic: 'POSP Executive Board Meeting & Dinner at Hotel Serina, Quetta.', type: 'event' }
      ]
    },
    {
      label: 'Day 01',
      date: 'Friday, 3rd April 2026',
      heading: 'Academic Sessions',
      sessions: [
        {
          name: 'Session 1',
          subtitle: 'Hip disorders 1',
            note: '(Running Tea)',
          chairs: 'Chairs',  
          moderator: 'Moderator',
          rows: [
            { time: '09:00 – 09:10', topic: 'Free Paper 1.', speaker: 'Dr' },
            { time: '09:10 – 09:20', topic: 'Free Paper 2.', speaker: 'Dr' },
            { time: '09:20 – 09:30', topic: 'Free Paper 3.', speaker: 'Dr' },
            { time: '09:30 – 09:40', topic: 'Question & Answer', type: 'qa' },
            { time: '09:40 – 10:00', topic: 'Congenital musculoskeletal anomalies - Early detection, and its importance', speaker: 'Guney Yilmaz (Physical)' },
            { time: '10:00 – 10:20', topic: 'Pakistan MSK Disabilities prevention program: DDH & CFD prevention strategies.', speaker: 'Anisuddin Bhatti' },
            { time: '10:40 – 11:00', topic: 'Debate: Hip screening protocol in an under privileged country. Four Questions to ponder', speaker: 'Faculty' },
            { time: '11:00 – 11:20', topic: 'State of Art: Radial Hemimelia & Pollicization', speaker: 'Tahseen Cheema' },
            { time: '11:20 – 11:40', topic: 'Rest Recreation & Tea @ Pharma exhibition', type: 'break' }
          ]
        },
        {
          name: 'Session 2',
          subtitle: 'Hip disorders 2',
            note: '(Running Tea)',
          rows: [
            { time: '11:40 – 12:00', topic: 'DDH: Management Strategies in neonates & infants.', speaker: 'Jose A Morcuende (Physical)' },
            { time: '12:00 – 12:20', topic: 'DDH: Management Strategies in Walking age children.', speaker: 'Guney Yilmaz (Physical)' },
            { time: '12:20 – 12:40', topic: 'DDH: Management strategies in age over 8 years - Pelvic osteotomies', speaker: 'Jiri Chomiak (On-line) or Marc Sinclair' },
            { time: '12:40 – 13:00', topic: 'DDH: Why failure occur, How to prevent and manage.', speaker: 'Anisuddin Bhatti' },
            { time: '13:00 – 13:15', topic: 'Question & Answers', type: 'qa' },
            { time: '13:15 – 14:20', topic: 'Friday Prayer & Lunch', type: 'break' }
          ]
        },
        {
          name: 'Session 3',
          subtitle: 'Hip Disorders 3',
            note: '(Running Tea)',
          rows: [
            { time: '14:20 – 14:30', topic: 'Free Paper 4.', speaker: 'Dr.' },
            { time: '14:30 – 14:40', topic: 'Free Paper 5.', speaker: 'Dr.' },
            { time: '14:40 – 14:50', topic: 'Free Paper 6.', speaker: 'Dr' },
            { time: '14:50 – 15:00', topic: 'Question & Answers', type: 'qa' },
            { time: '15:00 – 15:20', topic: 'SCFE: Acute unstable slip treatment strategies', speaker: 'Dr.' },
            { time: '15:20 – 15:40', topic: 'SCFE: Chronic slip treatment strategies', speaker: 'Dr.' },
            { time: '15:40 – 16:00', topic: 'Perthes’: How early the containment surgery?', speaker: 'Dr.' },
            { time: '16:00 – 16:20', topic: 'Perthes’: Late presentations, treatment strategies?', speaker: 'Dr.' },
            { time: '16:20 – 16:50', topic: 'State of art. PFFD: Principles of treatment & Super hip surgery', speaker: 'Drorr Paley (Online) or Marc Sinclar' },
            { time: '16:50 – 17:00', topic: 'Question & Answers', type: 'qa' },
            { time: '17:00 – 17:30', topic: 'POSP GENERAL BODY MEETING', type: 'event' },
            { time: '20:00 – 10:00', topic: 'Dinner', type: 'event' } // Time span as provided (possible typo)
          ]
        }
      ]
    },
    {
      label: 'Day 02',
      date: 'Saturday, 4th April 2026',
      sessions: [
        {
          name: 'Session 4',
          subtitle: 'Lower Limb Disabilities',
            note: '(Running Tea)',
          rows: [
            { time: '09:00 – 09:10', topic: 'Free Paper 7.', speaker: 'Dr' },
            { time: '09:10 – 09:20', topic: 'Free Paper 8.', speaker: 'Dr' },
            { time: '09:20 – 09:30', topic: 'Free Paper 9.', speaker: 'Dr' },
            { time: '09:30 – 09:40', topic: 'Question & Answer', type: 'qa' },
            { time: '09:40 – 10:00', topic: '', speaker: '' },
            { time: '10:00 – 10:20', topic: '', speaker: '' },
            { time: '10:20 – 10:40', topic: '', speaker: '' },
            { time: '10:40 – 11:00', topic: '', speaker: '' },
            { time: '11:00 – 11:30', topic: '', speaker: '' },
            { time: '11:30 – 11:50', topic: 'Rest Recreation & Tea @ Pharma exhibition', type: 'break' },
            { time: '11:50 – 12:10', topic: 'CDK: late presentation of Congenital knee dislocations and concomitant DDH', speaker: 'Javed Iqbal' },
            { time: '12:10 – 12:30', topic: 'CPT: Congenital Pseudoarthrosis Tibia :Treatment options', speaker: 'Ashok Johari (On-line)' },
            { time: '12:30 – 13:00', topic: 'State of Art: CPT: Congenital Pseudoarthrosis Tibia. Cross union.', speaker: 'Zhao Li (On-line)' },
            { time: '13:30 – 13:40', topic: 'Question & Answers', type: 'qa' },
            { time: '13:40 – 14:40', topic: 'Lunch & Prayers', type: 'break' }
          ]
        },
        {
          name: 'Session 5',
          subtitle: 'Miscellaneous',
            note: '(Running Tea)',
          rows: [
            { time: '14:40 – 14:50', topic: 'Free Paper 10.', speaker: 'Dr' },
            { time: '14:50 – 15:00', topic: 'Free Paper 11.', speaker: 'Dr' },
            { time: '15:00 – 15:10', topic: 'Free Paper 12.', speaker: 'Dr' },
            { time: '15:10 – 15:20', topic: 'Question & Answers', type: 'qa' },
            { time: '15:20 – 15:40', topic: 'Fibula Hemimelia – management', speaker: 'Monica Nogueira (On-line)' },
            { time: '15:40 – 16:00', topic: 'Tibia Vara: Blount’s disease, acute or gradual correction.', speaker: 'Sanjeev Sabharwal (On-line)' },
            { time: '16:00 – 16:20', topic: 'Osteogenesis Imperfecta- recent advances', speaker: 'Prof.' },
            { time: '16:20 – 16:40', topic: 'Septic arthritis Hip & Sequelae', speaker: 'David Spiegel (On-line)' },
            { time: '16:40 – 17:10', topic: 'STATE OF ART. TEV: Over view of treatment with special reference late walking age children. Tibialis Anterior Tendon Transfer in relapsed CFD.', speaker: 'Jose A Morcunede (Physical)' },
            { time: '17:10 – 17:20', topic: 'Question & Answers', type: 'qa' },
            { time: '17:20 – 18:00', topic: 'Closing and Certificate for Faculty', type: 'event' }
          ]
        }
      ]
    }
  ];

  adjustableTopics: string[] = [
    'Debate: Knee contracture management with foot and hip deformity.',
    'Debate: Newborn Brachial plexus injury',
    'A systematic approach to flat foot deformity in children',
    'Congenital vertical talus',
    'Super ankle procedure – surgical technique',
    'An approach to patellofemoral instability / Chronic patella dislocation',
    'Duchenne muscular dystrophy – What’s new?',
    'Congenital radioulnar synostosis',
    'TRUMA & TUMOUR INTERCATIVE REVIEW COURSE',
    'Paediatric ACL reconstruction Trauma Course',
    'Debate: Controversies Pediatric Neck of femur fractures',
    'The young athlete, common sports and overuse injuries',
    'Pediatric Benign tumors and their management',
    'Congenital radial head dislocations',
    'Management of Monteggia fractures in the child',
    'Debate: TENS Nailing Pediatric shaft long bone fractures.'
  ];
}
