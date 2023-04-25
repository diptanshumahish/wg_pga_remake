const columndata = [
  [
    {
        name: 'Submitted by',
        selector: row => row.submittedBy,
        style: {
            backgroundColor: 'rgba(63, 195, 128, 0.9)',
            color: 'white',
        },

    },
    {
        name: 'Name',
        selector: row => row.Name,

    },
    {
        name: 'Rate',
        selector: row => row.Rate,

    },
    {
        name: 'Date',
        selector: row => row.Date,

    },
    {
        name: 'E mail',
        selector: row => row.Email,
        grow: 3

    },
    {
        name: 'Organization',
        selector: row => row.Organization,
        grow: 2

    },
    {
        name: 'Mobile Number',
        selector: row => row.MobileNumber,
        grow: 2

    },
    {
        name: 'Candidate',
        selector: row => row.Candidate,
        grow: 2

    },
    {
        name: 'End Client',
        selector: row => row.EndClient,
        grow: 2

    },
    {
        name: 'Feedback',
        selector: row => row.Feedback,

    },
    {
        name: 'Submission date',
        selector: row => row.SubmissionDate.toDate().toDateString(),
        grow: 2


    },
    {
        name: 'Submission Time',
        selector: row => `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`

    },
  ],
];

export function getTableColumns(tableIndex: number) {
  return columndata[0];
}
