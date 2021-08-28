/*let coursesData = {
    //courses contains 1 ---->TRENDING COURSES
    allCourses: [{
        id: 1, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFCn7Wo7bm_ow/learning-public-crop_144_256/0/1578683904474?e=1626858000&v=beta&t=IvPP9tLL4ZL7uOkxoqZi-4KnUlGQkJKVB9HS1S84JLo',
        name: 'Delivering an Authentic Elevator Pitch',
        views: '3,314,670'
    },
    {
        id: 2, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1626858000&v=beta&t=zux772J1cM4-3k6li9n1dK2p_8yAWoxmK_b_VMNc_cI',
        name: 'Excel Tips Weekly',
        views: '1,704,079'
    },
    {
        id: 3, src: 'https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=1626858000&v=beta&t=_Pq_aRBWHiB79zToydFOGEOlQk50qTjhNnFbmWOZaiU',
        name: 'After Effects 2020 New Features',
        views: '4,507,280'
    },
    {
        id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
        name: 'The Six Morning Habits of High Performers',
        views: '3,293,670'
    },
    {
        id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
        name: 'Learning Arduino: Pulse Width Modulation',
        views: '514,570'
    },
    {
        id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
        name: 'Understanding the Impact of Deepfake Videos',
        views: '3,010,670'
    },
    {
        id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
        name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
        views: '2,586,085'
    },
    {
        id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
        name: 'The Six Morning Habits of High Performers',
        views: '3,293,670'
    },
    {
        id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
        name: 'Learning Arduino: Pulse Width Modulation',
        views: '514,570'
    },
    {
        id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
        name: 'Understanding the Impact of Deepfake Videos',
        views: '3,010,670'
    },
    {
        id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
        name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
        views: '2,586,085'
    }],

    // Business Tab Courses --->3
    businessCourses: [
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 1, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_144_256/0/1567117663418?e=1626922800&v=beta&t=JxFoAVMgBwEsZ6NDz1rxsSKpFGtCn6ffxSUdXPdD1p4',
            name: 'Delivering an Authentic Elevator Pitch',
            views: '3,314,670'
        },
        {
            id: 2, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1626858000&v=beta&t=zux772J1cM4-3k6li9n1dK2p_8yAWoxmK_b_VMNc_cI',
            name: 'Excel Tips Weekly',
            views: '1,704,079'
        },
        {
            id: 3, src: 'https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=1626858000&v=beta&t=_Pq_aRBWHiB79zToydFOGEOlQk50qTjhNnFbmWOZaiU',
            name: 'After Effects 2020 New Features',
            views: '4,507,280'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        },
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        }],
    // Technology Tab Courses --->3
    technologyCourses: [

        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 1, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_144_256/0/1567117663418?e=1626922800&v=beta&t=JxFoAVMgBwEsZ6NDz1rxsSKpFGtCn6ffxSUdXPdD1p4',
            name: 'Delivering an Authentic Elevator Pitch',
            views: '3,314,670'
        },
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 2, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1626858000&v=beta&t=zux772J1cM4-3k6li9n1dK2p_8yAWoxmK_b_VMNc_cI',
            name: 'Excel Tips Weekly',
            views: '1,704,079'
        },
        {
            id: 3, src: 'https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=1626858000&v=beta&t=_Pq_aRBWHiB79zToydFOGEOlQk50qTjhNnFbmWOZaiU',
            name: 'After Effects 2020 New Features',
            views: '4,507,280'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        },
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        }],
    // Technology Tab Courses --->3
    creativeCourses: [
        {
            id: 3, src: 'https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=1626858000&v=beta&t=_Pq_aRBWHiB79zToydFOGEOlQk50qTjhNnFbmWOZaiU',
            name: 'After Effects 2020 New Features',
            views: '4,507,280'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        },
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 1, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_144_256/0/1567117663418?e=1626922800&v=beta&t=JxFoAVMgBwEsZ6NDz1rxsSKpFGtCn6ffxSUdXPdD1p4',
            name: 'Delivering an Authentic Elevator Pitch',
            views: '3,314,670'
        },
        {
            id: 2, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1626858000&v=beta&t=zux772J1cM4-3k6li9n1dK2p_8yAWoxmK_b_VMNc_cI',
            name: 'Excel Tips Weekly',
            views: '1,704,079'
        },
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        }],

    //course contains 2
    trendingJobCourses: [
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        },
        {
            id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
            name: 'The Six Morning Habits of High Performers',
            views: '3,293,670'
        },
        {
            id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
            name: 'Learning Arduino: Pulse Width Modulation',
            views: '514,570'
        },
        {
            id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
            name: 'Understanding the Impact of Deepfake Videos',
            views: '3,010,670'
        },
        {
            id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
            name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
            views: '2,586,085'
        }, {
            id: 1, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFCn7Wo7bm_ow/learning-public-crop_144_256/0/1578683904474?e=1626858000&v=beta&t=IvPP9tLL4ZL7uOkxoqZi-4KnUlGQkJKVB9HS1S84JLo',
            name: 'Delivering an Authentic Elevator Pitch',
            views: '3,314,670'
        },
        {
            id: 2, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1626858000&v=beta&t=zux772J1cM4-3k6li9n1dK2p_8yAWoxmK_b_VMNc_cI',
            name: 'Excel Tips Weekly',
            views: '1,704,079'
        },
        {
            id: 3, src: 'https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=1626858000&v=beta&t=_Pq_aRBWHiB79zToydFOGEOlQk50qTjhNnFbmWOZaiU',
            name: 'After Effects 2020 New Features',
            views: '4,507,280'
        }],

    // trendingSpreadSheetCourses --->3
    trendingSpreadSheetCourses: [{
        id: 1, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_144_256/0/1567117663418?e=1626922800&v=beta&t=JxFoAVMgBwEsZ6NDz1rxsSKpFGtCn6ffxSUdXPdD1p4',
        name: 'Delivering an Authentic Elevator Pitch',
        views: '3,314,670'
    },
    {
        id: 2, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1626858000&v=beta&t=zux772J1cM4-3k6li9n1dK2p_8yAWoxmK_b_VMNc_cI',
        name: 'Excel Tips Weekly',
        views: '1,704,079'
    },
    {
        id: 3, src: 'https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=1626858000&v=beta&t=_Pq_aRBWHiB79zToydFOGEOlQk50qTjhNnFbmWOZaiU',
        name: 'After Effects 2020 New Features',
        views: '4,507,280'
    },
    {
        id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
        name: 'The Six Morning Habits of High Performers',
        views: '3,293,670'
    },
    {
        id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
        name: 'Learning Arduino: Pulse Width Modulation',
        views: '514,570'
    },
    {
        id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
        name: 'Understanding the Impact of Deepfake Videos',
        views: '3,010,670'
    },
    {
        id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
        name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
        views: '2,586,085'
    },
    {
        id: 4, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1626858000&v=beta&t=H0nSknJdXgcXK_6-M1plCgtD_Vjj1ph23W-y7mqtHrM',
        name: 'The Six Morning Habits of High Performers',
        views: '3,293,670'
    },
    {
        id: 5, src: 'https://media-exp3.licdn.com/dms/image/C4E0DAQFmJV_0Jz54qg/learning-public-crop_144_256/0/1568669931002?e=1626858000&v=beta&t=_3iQr6yXVyik13xRrYZNlU0RV2evzcfOxZLhPBeCwjU',
        name: 'Learning Arduino: Pulse Width Modulation',
        views: '514,570'
    },
    {
        id: 6, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1626858000&v=beta&t=Cbm2-oQvgbQNSXnDsr5M6CEkEyToYifQzQV03ish3pk',
        name: 'Understanding the Impact of Deepfake Videos',
        views: '3,010,670'
    },
    {
        id: 7, src: 'https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1626858000&v=beta&t=SmD6JRfb7jXp46rRtiPj-jo2CHJfDOwLpMSKoKiqE6U',
        name: 'Guy Kawasaki on Turning Life Wisdom into Business...',
        views: '2,586,085'
    }]
}*/

let coursesData = {
  //courses contains 1 ---->TRENDING COURSES
  allCourses: [
    {
      id: 1,
      src: "../../static/ImageBase/tumb1.jpg",
      name: "Delivering an Authentic Elevator Pitch",
      views: "3,314,670",
    },
    {
      id: 2,
      src: "../../static/ImageBase/tumb2.jpg",
      name: "Excel Tips Weekly",
      views: "1,704,079",
    },
    {
      id: 3,
      src: "../../static/ImageBase/tumb3.jpg",
      name: "After Effects 2020 New Features",
      views: "4,507,280",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb4.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb5.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb6.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb7.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 8,
      src: "../../static/ImageBase/tumb8.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 9,
      src: "../../static/ImageBase/tumb9.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 10,
      src: "../../static/ImageBase/tumb10.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 11,
      src: "../../static/ImageBase/tumb11.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
  ],

  // Business Tab Courses --->3
  businessCourses: [
    {
      id: 4,
      src: "../../static/ImageBase/tumb1.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb10.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 1,
      src: "../../static/ImageBase/tumb18.jpg",
      name: "Delivering an Authentic Elevator Pitch",
      views: "3,314,670",
    },
    {
      id: 2,
      src: "../../static/ImageBase/tumb17.jpg",
      name: "Excel Tips Weekly",
      views: "1,704,079",
    },
    {
      id: 3,
      src: "../../static/ImageBase/tumb15.jpg",
      name: "After Effects 2020 New Features",
      views: "4,507,280",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb16.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb13.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 8,
      src: "../../static/ImageBase/tumb10.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 9,
      src: "../../static/ImageBase/tumb12.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 10,
      src: "../../static/ImageBase/tumb1.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 11,
      src: "../../static/ImageBase/tumb11.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
  ],
  // Technology Tab Courses --->3
  technologyCourses: [
    {
      id: 5,
      src: "../../static/ImageBase/tumb10.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 1,
      src: "../../static/ImageBase/tumb5.jpg",
      name: "Delivering an Authentic Elevator Pitch",
      views: "3,314,670",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb15.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 2,
      src: "../../static/ImageBase/tumb12.jpg",
      name: "Excel Tips Weekly",
      views: "1,704,079",
    },
    {
      id: 3,
      src: "../../static/ImageBase/tumb16.jpg",
      name: "After Effects 2020 New Features",
      views: "4,507,280",
    },
    {
      id: 6,
      src: "./ImageBase/tumb1.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb14.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb7.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb6.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb8.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb9.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
  ],
  // Creative Tab Courses --->3
  creativeCourses: [
    {
      id: 3,
      src: "../../static/ImageBase/tumb12.jpg",
      name: "After Effects 2020 New Features",
      views: "4,507,280",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb6.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb9.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb13.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb15.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 1,
      src: "../../static/ImageBase/tumb18.jpg",
      name: "Delivering an Authentic Elevator Pitch",
      views: "3,314,670",
    },
    {
      id: 2,
      src: "../../static/ImageBase/tumb2.jpg",
      name: "Excel Tips Weekly",
      views: "1,704,079",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb1.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb14.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb4.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb7.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
  ],

  //course contains 2
  trendingJobCourses: [
    {
      id: 4,
      src: "../../static/ImageBase/tumb11.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb12.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb13.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb14.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb15.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb16.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb17.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb18.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 1,
      src: "./ImageBase/tumb10.jpg",
      name: "Delivering an Authentic Elevator Pitch",
      views: "3,314,670",
    },
    {
      id: 2,
      src: "../../static/ImageBase/tumb2.jpg",
      name: "Excel Tips Weekly",
      views: "1,704,079",
    },
    {
      id: 3,
      src: "../../static/ImageBase/tumb5.jpg",
      name: "After Effects 2020 New Features",
      views: "4,507,280",
    },
  ],

  // trendingSpreadSheetCourses --->3
  trendingSpreadSheetCourses: [
    {
      id: 1,
      src: "../../static/ImageBase/tumb6.jpg",
      name: "Delivering an Authentic Elevator Pitch",
      views: "3,314,670",
    },
    {
      id: 2,
      src: "../../static/ImageBase/tumb8.jpg",
      name: "Excel Tips Weekly",
      views: "1,704,079",
    },
    {
      id: 3,
      src: "../../static/ImageBase/tumb10.jpg",
      name: "After Effects 2020 New Features",
      views: "4,507,280",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb12.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb13.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb18.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb15.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
    {
      id: 4,
      src: "../../static/ImageBase/tumb17.jpg",
      name: "The Six Morning Habits of High Performers",
      views: "3,293,670",
    },
    {
      id: 5,
      src: "../../static/ImageBase/tumb11.jpg",
      name: "Learning Arduino: Pulse Width Modulation",
      views: "514,570",
    },
    {
      id: 6,
      src: "../../static/ImageBase/tumb3.jpg",
      name: "Understanding the Impact of Deepfake Videos",
      views: "3,010,670",
    },
    {
      id: 7,
      src: "../../static/ImageBase/tumb2.jpg",
      name: "Guy Kawasaki on Turning Life Wisdom into Business...",
      views: "2,586,085",
    },
  ],
};
