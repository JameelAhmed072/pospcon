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
  subheader?: string;     // Optional subheader line below session title
  chairmen?: string;     // Session chairmen
  co_chairmen?: string;       // Session co-chairmen
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
    // {
    //   label: 'Day 1',
    //   date: 'Friday, 3rd April 2026',
    //   events: [
    //     { time: '08:30 – 08:45', topic: 'Registration', type: 'event' },
    //     { time: '08:45 – 08:50', topic: 'Recitation of Holy Quran', type: 'event' },
    //     { time: '08:50 - 09:00', topic: 'Welcome speech', speaker: 'Dr Aslam Mengal' }
    //   ]
    // },
    {
      label: 'Day 01',
      date: 'Friday, 3rd April 2026',
      events: [
        { time: '08:30 – 08:45', topic: 'Registration', type: 'event' },
        { time: '08:45 – 08:50', topic: 'Recitation of Holy Quran', type: 'event' },
        { time: '08:50 - 09:00', topic: 'Welcome speech', speaker: 'Dr Aslam Mengal' }
      ],
      heading: 'Academic Sessions',
      sessions: [
        {
          name: 'Session 1',
          subtitle: 'Hip disorders 1',
            note: '(Running Tea)',
          subheader: 'Free Papers',
          chairmen: 'Prof. Guney Yilmaz',
          co_chairmen: 'Prof. Muhammad Bakhsh Shawani',  
          moderator: 'Dr. Pervez Ali',
          rows: [
            // { time: '09:00 – 09:10', topic: 'Free Paper 1.', speaker: 'Dr' },
            // { time: '09:10 – 09:20', topic: 'Free Paper 2.', speaker: 'Dr' },
            // { time: '09:20 – 09:30', topic: 'Free Paper 3.', speaker: 'Dr' },
            { time: '09:00 – 09:08', topic: 'Closed Reduction for Developmental Dysplasia of the Hip', speaker: 'Dr. Jawad ul Haq' },
            { time: '09:08 – 09:16', topic: 'Delayed Presentation of Developmental Dysplasia of the Hip:         Challenges and Outcomes in a Resource- Limited Society', speaker: 'Dr. Muhammad Usama' },
            { time: '09:16 – 09:24', topic: 'femoral neck lengthening in healed Perthes, long term Follow up', speaker: 'Dr. Hamza' },
            { time: '09:24 – 09:32', topic: 'Surgical Correction of Moderate to Severe chronic, Stable Slipped Capital Femoral Epiphysis via Triplanar Intertrochanteric Osteotomy', speaker: 'Dr. Muhammad Umer Faheem' },
            { time: '09:32 – 09:40', topic: 'Q&A', type: 'qa' },
            { time: '', topic: 'Invited Talks Hip Disorders', type: 'break' },
            { time: '09:45 – 09:55', topic: 'Building MSK Screening protocol and Hip surveillance program in Pakistan. From local insights to global implications ', speaker: 'Prof. Anisuddin Bhatti' },
            { time: '09:55 – 10:10', topic: 'Early Detection of Musculoskeletal Disorders: The Turkish Screening Experience', speaker: 'Prof. Murat Oto' },
            { time: '10:10 – 10:15', topic: 'Q&A', type: 'qa' },
            { time: '10:15-10:30', topic: 'Developmental Dysplasia of the Hip in Walking-Age Children: Decision-Making and Management Strategies', speaker: 'Prof. Guney Yilmaz' },
            { time: '10:30 – 10:35', topic: 'Q&A', type: 'qa' },
            { time: '10:35-10:50', topic: 'Developmental Dysplasia of the Hip Beyond Eight Years: Role of Pelvic Osteotomies and Salvage Procedures', speaker: 'Prof. Muhammad Bakhsh Shawani' },
            { time: '10:50-11:05', topic: 'Open reduction in neglected DDH – pitfalls and how to avoid them', speaker: 'Prof. Atiq uz Zaman' },
              
          ]
        },
        {
          name: 'Session 2',
          subtitle: 'State of Art Lectures',
            note: '(Running Tea)',
          chairmen: 'Prof. Muharram Inan',
          co_chairmen: 'Prof. Amanullah Kakar',  
          moderator: 'Dr. Muhammad Jamil',  
          rows: [
            { time: '11:05-11:25', topic: 'Early management of Radial Hemimelia', speaker: 'Prof. Rutuja Mahta' },
            { time: '11:25-11:45', topic: 'Osteogenesis Imperfecta: Current Concepts and Emerging Perspectives', speaker: 'Dr. Taral Nagda' },
            { time: '11:45-12:05', topic: 'Pelvic osteotomies in children. When to use what. A review with case discussions', speaker: 'Prof. Marc Sinclair' },
            { time: '12:05-12:15', topic: 'Q&A', type: 'qa' },
            { time: '12:15-14:00', topic: ' Inauguration of the Conference & Exhibition', speaker: 'Chief Guest' },
            { time: '', topic: ' Lunch & Prayers', speaker: '-' },
          ]
        },
        {
          name: 'Session 3',
          subtitle: 'Hip disorders 2',
            note: '(Running Tea)',
          subheader: 'Invited talks',
          chairmen: 'Prof. Marc Sinclair',
          co_chairmen: 'Prof. Amin Chinoy',  
          moderator: 'Dr. Shehzad Anver',  
          rows: [
            { time: '14:00-14:15', topic: 'DDH : Surgical treatment: age 8 month to 36 months ( Summary)', speaker: 'Prof. Amanullah Khan Kakar' },
            { time: '14:15-14:30', topic: 'Hip Interventions in Arthrogryposis Multiplex Congenita (AMC): Indications, Surgical Approaches, Realistic Expectations, and Functional Outcomes', speaker: 'Prof. Anisuddin Bhatti' },
            { time: '14:30-14:45', topic: 'Ganz Periacetabular osteotomy', speaker: 'Dr. Umair Nadeem' },
            { time: '14:45-15:00', topic: 'SCFE: Chronic slip treatment strategies', speaker: 'Prof. Dr. Muharram Inan' },
            { time: '15:00-15:15', topic: ' Management of PFFD according to local resources', speaker: 'Dr. Saeed Ahmed Jadoon' },
            { time: '15:15-15:20', topic: ' Q&A', speaker: '-' },
          ]
        },
        {
          name: 'Session 4',
          subtitle: 'Knee Disorders',
            note: '(Running Tea)',
          subheader: 'Invited talks',
          chairmen: 'Prof. Maher Gulsen',
          co_chairmen: 'Prof. Karim bakhsh',  
          moderator: 'Dr. Asif Paracha',  
          rows: [
            { time: '5:20-15:35', topic: 'Patellofemoral Instability in Children and Adolescents. A Comprehensive Approach to Recurrent and Chronic Patellar Dislocation', speaker: 'Dr. Kashif Salik' },
            { time: '16:35-16:50', topic: 'Genu Varum and Genu Valgum in Children Physiological versus Pathological Alignment', speaker: 'Prof. Mahir Gulsen' },
            { time: '16:50-17:05', topic: 'Congenital Knee Dislocation Early Management and Long-Term Outcomes', speaker: 'Dr. Muhammad Jamil' },
            { time: '17:05-17:20', topic: 'Deformity correction by guided growth in children Indications, Timing, and Complications', speaker: 'Dr. Saeed Ahmed Jadoon' },
            { time: '17:20-17:30', topic: ' Q&A', type: 'qa' },
            { time: '', topic: ' Free papers', type: 'break' },
            { time: '17:30-17:38', topic: 'Outcome of surgical release of distal hamstring muscles in knee contractures of spastic cerebral palsy patients', speaker: 'Dr. Nek Mohammad' },
            { time: '17:38-17:46', topic: 'Shoulder function after humerus derotational osteotomy for Obstetric Brachial. plexus injury(Erb Palsy)', speaker: 'Dr. Baqir Hussain' },
            { time: '17:46-17:52', topic: 'Role of temporary/Bridging Reconstruction in paeds Ortho malignancies', speaker: 'Prof Brig Fayyaz Ahmad Orfi' },
            { time: '17:52-18:00', topic: 'Outcome of Closed Reduction and Percutaneous Pinning/Nailing in Pediatric Upper Limb Fractures: A Retrospective Observational Study', speaker: 'Dr. Tehreen Mehmood' },
            { time: '17:54-18:02', topic: ' Q&A', type: 'qa' },
            { time: '18:02-18:30', topic: ' POSP General Body Meeting', speaker: '-' },
            { time: '', topic: ' Faculty Dinner', type: 'break' },
          ]
        }
      ]
    },
    {
      label: 'Day 02',
      date: 'Saturday, 4th April 2026',
      sessions: [
        {
          name: 'Session 5',
          subtitle: 'Foot and Ankle disorders',
            note: '(Running Tea)',
          subheader: 'Free Papers',
          chairmen: 'Prof. Murat Oto',
          co_chairmen: 'Prof. Sikandar Hayat',  
          moderator: 'Dr. Jamil Zehri',  
          rows: [
            { time: '09:00–09:08', topic: 'Results of Turco’s One Stage Postero-Medial Release [PMR] for the Correction of the Idiopathic Congenital Talipes Equinovarus: 20 years follow -up', speaker: 'Dr. Abdul Rehman' },
            { time: '09:08-09:16', topic: 'Factors Associated With Relapse After Ponseti Treatment Of Idiopathic Clubfoot', speaker: 'Dr. Rashid Muhammad' },
            { time: '09:16-09:24', topic: 'Congenital Vertical Talus: Dobbs Method (Serial Casting with Minimally Invasive Surgery) versus Traditional Extensive Surgery – Outcomes, Recurrence Rates, & Functional Results', speaker: 'Dr. Younus Jan Baloch' },
            { time: '09:24-09:32', topic: 'Comparison of Effectiveness of Surgical Blade 11 and Ophthalmic Knife for Percutaneous Achilles Tendon Tenotomy in Idiopathic Clubfoot Patients: A Randomized Controlled Trial', speaker: 'Dr. Sidra Tul Zaitoon' },
            { time: '09:32-09:37', topic: ' Q&A', type: 'qa' },
            { time: '', topic: ' Invited talks', type: 'break' },
             { time: '09:37-09:52', topic: 'Perthes’: head neck drilling and stem cell? ', speaker: 'Prof. Muhrram Inan' },
            { time: '09:52-10:07', topic: 'Perthes’: Late presentations, treatment strategies?', speaker: 'Prof.Guney Yilmaz' },
            { time: '10:07-10:22', topic: 'Paediatric Orthopaedics Scope & Advances', speaker: 'Prof. Javeed Iqbal' },
            { time: '10:22-10:27', topic: ' Q&A', type: 'qa' },
            { time: '10:27-10:42', topic: ' Femoral Versus Pelvic Osteotomies in LCPD–Current Surgical Trends', speaker: 'Prof. Atiq uz Zaman' },
            { time: '10:42-10:55', topic: 'Acute Septic Arthritis of the Hip: Early Diagnosis and Emergency Management', speaker: 'Dr. Asif Paracha' },
            { time: '10:55-11:10', topic: 'Fibular hemimelia: Reconstruction options', speaker: 'Prof. Sikandar Hayat' },
            { time: '11:10-11:25', topic: 'Management Strategy for femoral shaft fracture Across Different Age Groups', speaker: 'Dr Shahzad Anver' },
            { time: '11:25-11:35', topic: ' Q&A', type: 'qa' },
          ]
        },
        {
          name: 'Session 6',
          subtitle: ' Invited Talks Spine & Tumors Disorders',
            note: '(Running Tea)',
          subheader: 'Invited talks',
          chairmen: 'Prof. Javed Iqbal',
          co_chairmen: 'Prof. Atiq uz Zaman',  
          moderator: 'Dr. Noman Parek',  
          rows: [
            { time: '11:35-11:50', topic: 'Selection of fusion levels in adolescent idiopathic scoliosis AIS', speaker: 'Prof. Mahir Gulsen' },
            { time: '11:50-12:05', topic: ' Growing rod techniques for immature spine', speaker: 'Prof. Mahir Gulsen' },
            { time: '12:05-12:15', topic: 'Idiopathic scoliosis – principles of management', speaker: 'Dr. Umer Faheem' },
            { time: '12:15-12:20', topic: 'Q&A', type: 'qa' },
            { time: '12:20-12:35', topic: ' Challenges in paediatrics bone sarcoma reconstruction', speaker: 'Dr. Zeeshan Khan' },
            { time: '12:35-12:50', topic: 'Paediatric tumors reconstruction options', speaker: 'Prof. Badaruddin Sahito' },
            { time: '12:50-13:05', topic: 'Biological reconstruction Vs Endoprosthetic reconstruction in bone sarcomas.What’s logical?', speaker: 'Dr. Zeeshan Khan' },
            { time: '13:05-13:15', topic: ' Limb salvage in Soft tissue tumors in children', speaker: 'Prof Badaruddin Sahito' },
            { time: '13:15-14:00', topic: ' Q&A. lunch & Prayers', speaker: '-' },
          ]
        },
        {
          name: 'Session 7',
          subtitle: 'State of Art',
            note: '(Running Tea)',
          subheader: 'Invited talks',
          chairmen: 'Prof. Anisuddin Bhatti',
          co_chairmen: 'Prof. Nusrat Rasheed',  
          moderator: 'Dr. Salik Kashif',  
          rows: [
            { time: '14:00-14:20', topic: 'Erbs Palsy Reconstruction-decision making and essential step', speaker: 'Prof. Tehseen Cheema' },
            { time: '14:20-14:40', topic: 'CPT: Congenital Pseudoarthrosis Tibia :Treatment options', speaker: 'Prof. Ashok Johari (On-line)' },
            { time: '14:40-14:50', topic: 'Q & A', type: 'qa' },
            { time: '', topic: 'Invited Talks Session Foot', type: 'break' },
            
            { time: '14:50-15:05', topic: 'Early Assessment of Neonatal Foot Deformities: Avoiding Misdiagnosis and Overtreatment', speaker: 'Prof. Guny Yalmiz' },
            { time: '15:05-15:20', topic: 'Classification for clubfoot deformity in walking age children. do we have a common language?', speaker: 'Prof. Marc Sincler' },
            { time: '15:20-15:35', topic: 'Comprehensive Clubfoot Care Establishing Sustainable Systems from Newborn Detection to Long-Term Bracing', speaker: 'Prof. Karim Bakhsh' },
            { time: '15:35-15:50', topic: 'Relapse of CLUBFOOT and its Managment by TA tendon transfer.', speaker: 'Prof. Amanullah Khan Kakar' },
            { time: '15:50-16:05', topic: 'Club foot management: historical narrative review', speaker: 'Prof. Sikandar Hayat' },
            { time: '16:05-16:20', topic: 'Congenital Vertical Talus (Rocker-Bottom Foot). Early Diagnosis and Contemporary Management Strategies.', speaker: 'Prof. Muhammad Amin Chinoy' },
            { time: '16:20-16:30', topic: 'Q&A', type: 'qa' },
          ]
        },
        {
          name: 'Session 8',
          subtitle: 'State of Art Lecturer',
            note: '(Running Tea)',
          subheader: 'Invited talks',
          chairmen: 'Prof. Tehseen Cheema',
          co_chairmen: 'Prof. Zamir Soomro',  
          moderator: 'Dr. Parviz Ali/ Dr Muzafar',  
          rows: [
            { time: '16:30-16:50', topic: 'TEV: Over view of treatment with special reference late walking age children. Tibialis Anterior Tendon Transfer in relapsed CFD.', speaker: 'Prof. Jose A Morcunede' },
            { time: '16:50-17:10', topic: 'A Systematic Approach to Flatfoot Deformity in Children. Clinical Evaluation, Imaging, & Evidence-Based Management', speaker: 'Prof. Muharram Inan' },
            { time: '', topic: 'Invited talks', type: 'break' },
            { time: '17:10-17:22', topic: 'Supracondylar Fracture Complications: How to Avoid and Manage', speaker: 'Prof. Murat oto' },
            
            { time: '17:22-17:34', topic: 'Growth Disturbance After Pediatric Fractures: Prevention and Management', speaker: 'Dr Noman Parekh' },
            { time: '17:34-17:46', topic: 'Treatment of Congenital Syndactyly', speaker: 'Prof. Syed Kamran Ahmed' },
            { time: '17:46-17:50', topic: 'Q&A', type: 'qa' },
            { time: '', topic: 'Free Paper', type: 'break' },
            { time: '17:50-17:58', topic: ' Functional outcomes of single event multilevel surgery in patients of spastic cerebral palsy', speaker: 'Dr. Sidra Tul Zaitoon' },
            { time: '17:58-18:06', topic: 'Close reduction and percutaneous pinning od displaced supracondylar fraccture of humerus in children with delyed presentation; results', speaker: 'Dr. Faisal Shah' },
            { time: '18:06-18:14', topic: ' Complication of abduction foot orthosis in club foot treated parties with ponseti method', speaker: 'Dr. Asnaf' },
            { time: '18:14-18:25', topic: ' High-Volume Philanthropic Management of Paediatric Orthopaedic Deformities: A Demographic and Clinical Outcome Analysis of 1,269 Procedures ', speaker: 'Dr. Amjad Gulzar Ahmed Shaikh' },
            { time: '18:25 -18:35', topic: 'Discussion', type: 'qa' },
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
