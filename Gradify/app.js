new Vue({
    el: '#app',
    data: {
        currentUser: {
            name: 'Siyahluma Mbulali',
            role: 'Grade 12 Student',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            performanceScore: 85
        },
        upcomingAssignments: [
            { id: 1, name: 'Mathematics Project', daysLeft: 5 },
            { id: 2, name: 'Physics Lab Report', daysLeft: 3 },
            { id: 3, name: 'English Essay', daysLeft: 7 }
        ],
        recentAnnouncements: [
            { 
                id: 1, 
                title: 'Mid-Term Exams Schedule', 
                description: 'Final exam schedule will be released next week.' 
            },
            { 
                id: 2, 
                title: 'Science Fair Registration', 
                description: 'Register for the annual science fair by month-end.' 
            }
        ],
        nextClass: {
            name: 'Advanced Calculus',
            time: '10:30 AM - 12:00 PM',
            room: 'Mathematics Block, Room 304'
        },
        curriculumSubjects: [
            {
                id: 1,
                name: 'Mathematics',
                curriculum: [
                    {
                        term: 1,
                        topics: [
                            'Advanced Algebra',
                            'Trigonometry',
                            'Calculus Introduction',
                            'Analytical Geometry'
                        ]
                    },
                    {
                        term: 2,
                        topics: [
                            'Differential Calculus',
                            'Integral Calculus',
                            'Probability and Statistics',
                            'Linear Algebra'
                        ]
                    }
                ],
                assessments: [
                    { name: 'Algebra Test', mark: 85, total: 100 },
                    { name: 'Trigonometry Quiz', mark: 78, total: 100 },
                    { name: 'Mid-Term Exam', mark: 82, total: 100 }
                ]
            },
            {
                id: 2,
                name: 'Physics',
                curriculum: [
                    {
                        term: 1,
                        topics: [
                            'Mechanics',
                            'Thermodynamics',
                            'Wave Motion',
                            'Optics'
                        ]
                    },
                    {
                        term: 2,
                        topics: [
                            'Electromagnetism',
                            'Modern Physics',
                            'Quantum Mechanics Basics',
                            'Nuclear Physics'
                        ]
                    }
                ],
                assessments: [
                    { name: 'Mechanics Assignment', mark: 90, total: 100 },
                    { name: 'Thermodynamics Test', mark: 85, total: 100 },
                    { name: 'Physics Lab Report', mark: 88, total: 100 }
                ]
            },
            {
                id: 3,
                name: 'Chemistry',
                curriculum: [
                    {
                        term: 1,
                        topics: [
                            'Organic Chemistry',
                            'Inorganic Chemistry',
                            'Chemical Bonding',
                            'Periodic Table'
                        ]
                    },
                    {
                        term: 2,
                        topics: [
                            'Reaction Kinetics',
                            'Electrochemistry',
                            'Biochemistry',
                            'Environmental Chemistry'
                        ]
                    }
                ],
                assessments: [
                    { name: 'Organic Chemistry Quiz', mark: 75, total: 100 },
                    { name: 'Chemical Bonding Test', mark: 80, total: 100 },
                    { name: 'Chemistry Practical', mark: 88, total: 100 }
                ]
            }
        ],
        selectedSubject: null,
        attendancePercentage: 92,
        overallMarksPercentage: 84
    },
    methods: {
        logout() {
            // Implement logout logic
            alert('Logging out...');
        },
        viewSubjectCurriculum(subject) {
            this.selectedSubject = subject;
            const curriculumModal = new bootstrap.Modal(document.getElementById('curriculumModal'));
            curriculumModal.show();
        },
        viewSubjectMarks(subject) {
            this.selectedSubject = subject;
            const marksModal = new bootstrap.Modal(document.getElementById('marksModal'));
            marksModal.show();
        },
        calculatePercentage(mark, total) {
            return Math.round((mark / total) * 100);
        }
    }
});