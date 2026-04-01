import { Component } from '@angular/core';

interface ScheduleRow {
  time?: string;
  topic: string;
  speaker?: string;
  type?: 'qa' | 'break' | 'event';
}

interface Session {
  name: string;
  subtitle?: string;
  note?: string;
  subheader?: string;
  chairmen?: string;
  co_chairmen?: string;
  moderator?: string;
  rows: ScheduleRow[];
}

interface CourseDay {
  label: string;
  date: string;
  heading?: string;
  events?: ScheduleRow[];
  sessions?: Session[];
}

@Component({
  selector: 'app-deformity-correction-course',
  templateUrl: './deformity-correction-course.component.html',
  styleUrls: ['./deformity-correction-course.component.css']
})
export class DeformityCorrectionCourseComponent {
  title = 'Cerebral Palsy Workshop';
  courseCode = 'POSPCON-2026';
  courseDates = '1st & 2nd April 2026';
  venue = 'Jinnah Postgraduate Medical Centre (JPMC), Karachi, Pakistan';

  days: CourseDay[] = [
    {
      label: 'Day 01',
      date: '1st April 2026',
      heading: 'Morning Sessions',
      // events: [
      //   { time: '08:00 – 08:30', topic: 'Registration', type: 'event' },
      //   { time: '08:30 – 08:35', topic: 'Recitation of Holy Quran', type: 'event' },
      //   { time: '08:35 – 08:45', topic: 'Welcome Note', speaker: 'Dr. Dummy Speaker' },
      // ],
      sessions: [
        {
          name: '',
          subtitle: '',
          note: '',
          chairmen: '',
          co_chairmen: '',
          moderator: '',
          rows: [
            { time: '09:00 – 02:00', topic: 'Case Based Discussions:  Presentations cases to be operated,  Live Surgery by the faculty Two OR Suits', speaker: 'Dr. Muzaffar,Dr. Sharjeel, Dr. Altaf, Dr. Kashif Soomro,Dr. Sidra, Dr. Asif, Dr. Jamal Nasir' },
            { time: '', topic: 'Invited talks', type: 'break' },
            { time: '2:00-2:15', topic: 'Hip Reconstruction in Cerebral Palsy: Video Demonstration of AcetabularProximal Femoral Procedures', speaker: 'Dr. Ayesha Saeed' },
            { time: '2:15-2:30', topic: 'Case Presentations: Management of common gait abnormalities of the knee', speaker: 'Prof. JawadUl Haq' },
            { time: '02:30-02:50', topic: 'Role of Orthoses and Assistive Devices in Cerebral Palsy: Clinical Indications, Device Selection, and Functional Impact, with Emphasis on multidisciplinary rehabilitation.', speaker: 'Dr. Nabila Somoro' },
            { time: '03:00', topic: 'Lunch', type: 'break' },
            { time: '', topic: 'International Faculty Dinner Day 1 Wednesday', type: 'break' },
          ]
        }
      ]
    },
    {
      label: 'Day 02',
      date: '2nd April 2026',
      heading: '',
      sessions: [
        {
          name: '',
          subtitle: '',
          note: '',
          chairmen: '',
          co_chairmen: '',
          moderator: '',
          rows: [
            { time: '', topic: 'Invited talks', type: 'break' },
            { time: '09:00-17:00', topic: 'CP Reconstruction Surgery - Invited Talks', speaker: '-' },
            { time: '08:30-09:00', topic: 'Welcome & Registration', speaker: '-' },
            { time: '09:00-09:05', topic: 'Recitation of Quran', speaker: '-' },
            { time: '09:05–09:15', topic: 'Welcome speech', speaker: 'Dr. Muhammad Aslam Mengal' },
            { time: '09:15–09:35', topic: 'Evaluation of CP Surgical Patients: Standardized Clinical Assessment with Video and Image Demonstration', speaker: 'Dr. Perviz Ali' },
            { time: '09:35-09:55', topic: 'Understanding Walking in Cerebral Palsy: Normal Versus Pathological Gait Patterns', speaker: 'Dr. Taral Nagda (online)' },
            { time: '09:55-10:00', topic: 'Questions & Answers', type: 'qa' },
            { time: '10:00-10:20', topic: 'Botulinum Toxin in Spastic Cerebral Palsy: Indications, Techniques, and Long-Term Outcomes', speaker: 'Dr. Murat Oto' },
            { time: '10:25–10:45', topic: 'Soft Tissue Procedures of the Ankle and Foot in Cerebral Palsy Tenotomies and Tendon Lengthening: Indications and Techniques', speaker: 'Dr. Umair Nadeem' },
            { time: '10:45-11:05', topic: 'Surgical Video Demonstration – Soft Tissue Procedures Achilles Tendon Lengthening, Gastrocnemius Recession, and Tendon Transfers', speaker: 'Prof. Muharrem Inan' },
            { time: '11:05-11:15', topic: 'Questions & Answers', type: 'qa' },
            { time: '11:15-11:35', topic: 'Bony Procedures Around the Ankle in Cerebral Palsy Derotation and Distal Tibial Valgus Osteotomies: Indications and Surgical Techniques ', speaker: 'Prof. Guney Yılmaz' },
            { time: '11:35-11:40', topic: 'Questions & Answers', type: 'qa' },
            { time: '11:40–12:00', topic: 'Surgical Video Demonstration – Bony Procedures Distal Tibial Derotation and Valgus Osteotomy Techniques', speaker: 'Prof. Guney Yilmaz' },
            // { time: '12:00-12:10', topic: 'Questions & Answers', speaker: 'Prof. Guney Yilmaz' },
            { time: '12:00-12:10', topic: 'Questions & Answers', type: 'qa' },
            { time: '12:10-12:30', topic: 'Management of Pes Planus in Cerebral Palsy: Lateral Column Lengthening (LCL): Indications, Planning, and Techniques', speaker: 'Prof Murat oto' },
            { time: '12:30-12:35', topic: 'Questions & Answers', type: 'qa' },
            { time: '12:35-12:55', topic: 'Management of Pes Cavovarus in Cerebral Palsy: Tendon Transfer Procedures: Indications and Surgical Techniques', speaker: 'Prof. Guney Yılmaz' },
            { time: '12:55-13:10', topic: 'Achilotomy and gastrocinemius video presentation talk', speaker: 'Dr. Ilyas Kar' },
            { time: '13:10-13:15', topic: 'Questions & Answers', type: 'qa' },
            { time: '13:15-13:45', topic: 'LUNCH & Prayers', type: 'break' },
            { time: '13:45-14:00', topic: '“Hip Surveillance and Surgical Decision Making', speaker: 'Prof. Atiq Uz Zaman' },
            { time: '14:00-14:20', topic: 'Soft Tissue Management of the Knee in Cerebral Palsy Indications and techniques', speaker: 'Dr. Salik Kashif' },
            { time: '14:20-14:40', topic: 'Bony Procedures Around the Knee in Cerebral Palsy Knee Extension Osteotomies: Indications and Surgical Technique', speaker: 'Dr. Saeed Jadoon' },
            { time: '14:40-15:00', topic: 'Minimal invasive femoral derotation osteotomy in CP cases', speaker: 'Prof. Mahir Gulsen' },
            { time: '15:00–15:10', topic: 'Questions & Answers', type: 'qa' },
            { time: '15:10–15:30', topic: 'Management of Stiff Knee in Cerebral Palsy', speaker: 'Prof. Muharrem Inan' },
            { time: '15:30-15:50', topic: 'Patellar Procedures in Cerebral Palsy Patellar Advancement and Extensor Mechanism Reconstruction: Indications and Techniques (Surgical Video Demonstration)', speaker: 'Prof. Muharrem Inan' },
            { time: '15:50-16:10', topic: 'Principles of Upper Limb Surgical Planning in CP', speaker: 'Dr. Rameez Qudsi' },
            { time: '16:10-16:20', topic: 'Q&A', type: 'qa' },
            { time: '16:20-16:40', topic: 'Vote of thanks & Certificate distribution ', speaker: '-' },
            { time: '', topic: 'Executive Committee meeting: 16:40 Pm. JPMC Surgical Building Muhammad Omar Conference Hall', type: 'break' },
            { time: '', topic: 'Gala Dinner Day 2 Thursday', type: 'break' },

          ]
        },
      ]
    },
  ];
}
