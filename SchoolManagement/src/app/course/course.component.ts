import { Component } from '@angular/core';

interface ClassInfo {
  className: string;
  lesson: {
      lessonName: string,
      date: string,
      time: string
  }[]
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
    times: string[] = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
        '5:00 PM',
    ];
    dates: string[] = [
        '2023-12-25',
        '2023-12-26',
        '2023-12-27',
        '2023-12-28',
        '2023-12-29',
        '2023-12-30',
    ];

    classes: ClassInfo[] = [
    {   className: 'Software_Engineering',
        lesson : [
            {   lessonName : 'CM',
                date: '2023-12-25',
                time: '10:00 AM' },
            {   lessonName : 'TD',
                date: '2023-12-27',
                time: '04:00 PM' }
        ]
    },
    {   className: 'Securing_Embedded_Software',
        lesson : [
            {   lessonName : 'CM',
                date: '2023-12-26',
                time: '10:00 AM' },
            {   lessonName : 'TD',
                date: '2023-12-28',
                time: '04:00 PM' }
        ]
    },
    {   className: 'Operating_System',
        lesson : [
            {   lessonName : 'CM',
                date: '2023-12-27',
                time: '10:00 AM' },
            {   lessonName : 'TD',
                date: '2023-12-29',
                time: '04:00 PM' }
        ]
    },
    {   className: 'Espace_Vectoriels',
        lesson : [
            {   lessonName : 'CM',
                date: '2023-12-28',
                time: '10:00 AM' },
            {   lessonName : 'TD',
                date: '2023-12-30',
                time: '04:00 PM' }
        ]
    },
  ];

  selectedClasses: ClassInfo[] = [];

  toggleSelection(classInfo: ClassInfo) {
    const index = this.selectedClasses.findIndex(c => c.className === classInfo.className);
    if (index === -1) {
      this.selectedClasses.push(classInfo);
    } else {
      this.selectedClasses.splice(index, 1);
    }
  }
    calculateTopOffset(time: string): number {
        const [hour, minute] = time.split(':').map(Number);
        const totalMinutes = hour * 60 + minute;
        // Assuming each time slot is 30 minutes, adjust the multiplier as needed
        const timeSlotHeight = 60;
        return (totalMinutes / 60) * timeSlotHeight;
    }

}
