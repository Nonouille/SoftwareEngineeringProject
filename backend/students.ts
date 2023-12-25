// Import required modules
import * as express from 'express';
import { Request, Response} from 'express';

const app = express();

app.use(express.json()); // => to parse request body with http header "content-type": "application/json"


app.get('/api/liveness', (req: Request, res: Response) => {
    res.send('OK !!!');
});

interface student {
    Nom :string,
    Prenom: string,
    id: number,
    Adresse: string,
    Mail : string,
    Majeur : string,
    Year : number,
    Grades : {
        Database_Management: string,
        Fonctions_et_Suite: string,
        Transfert_Thermique: string,
        Node_React: string,
        OS_Architecture: string
    }
}

let students : student[] =
    [
        {
            Nom: "Ashcroft",
            Prenom: "Thaddeus",
            id: 1,
            Adresse: "1616 Oakdale St",
            Mail: "thaddeus@example.com",
            Majeur: "CCC",
            Year: 5,
            Grades: {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Ashford",
            Prenom: "Atlas",
            id: 2,
            Adresse: "1010 Piney St",
            Mail: "atlas@example.com",
            Majeur: "CCC",
            Year: 1,
            Grades: {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Beaumont",
            Prenom: "Persephone",
            id: 3,
            Adresse: "2323 Birch St",
            Mail: "persephone@example.com",
            Majeur: "DIA",
            Year: 2,
            Grades: {
                Database_Management: "C",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "B",
                Node_React: "A",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Bellamy",
            Prenom: "Kai",
            id: 4,
            Adresse: "1212 Maplewood St",
            Mail: "kai@example.com",
            Majeur: "EVD",
            Year: 3,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Blackwood",
            Prenom: "Freya",
            id: 5,
            Adresse: "111 Willow St",
            Mail: "freya@example.com",
            Majeur: "MNM",
            Year: 5,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "A",
                Node_React: "B",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Carmichael",
            Prenom: "Jasper",
            id: 6,
            Adresse: "101 Pine St",
            Mail: "jasper@example.com",
            Majeur: "EVD",
            Year: 1,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "B",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Celeste",
            Prenom: "Fairfax",
            id: 7,
            Adresse: "1313 Cedar St",
            Mail: "fairfax@example.com",
            Majeur: "OCC",
            Year: 4,
            Grades: {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Dante",
            Prenom: "Everhart",
            id: 8,
            Adresse: "456 Elm St",
            Mail: "dante@example.com",
            Majeur: "CCC",
            Year: 2,
            Grades  : {
                Database_Management: "C",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Elara",
            Prenom: "Kingsley",
            id: 9,
            Adresse: "1515 Birchwood St",
            Mail: "elara@example.com",
            Majeur: "DIA",
            Year: 5,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "A",
                Node_React: "B",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Emery",
            Prenom: "Grayson",
            id: 10,
            Adresse: "1111 Spruce St",
            Mail: "grayson@example.com",
            Majeur: "MNM",
            Year: 3,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "B",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Esme",
            Prenom: "Hawthorne",
            id: 11,
            Adresse: "1717 Cedardale St",
            Mail: "esme@example.com",
            Majeur: "OCC",
            Year: 1,
            Grades: {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Freya",
            Prenom: "Blackwood",
            id: 12,
            Adresse: "111 Willow St",
            Mail: "freya@example.com",
            Majeur: "MNM",
            Year: 5,
            Grades : {
                Database_Management: "C",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Finn",
            Prenom: "Lockhart",
            id: 13,
            Adresse: "666 Redwood St",
            Mail: "finn@example.com",
            Majeur: "EVD",
            Year: 5,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "A",
                Node_React: "B",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Jasper",
            Prenom: "Carmichael",
            id: 14,
            Adresse: "101 Pine St",
            Mail: "jasper@example.com",
            Majeur: "EVD",
            Year: 1,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Kai",
            Prenom: "Bellamy",
            id: 15,
            Adresse: "1212 Maplewood St",
            Mail: "kai@example.com",
            Majeur: "EVD",
            Year: 3,
            Grades : {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Livia",
            Prenom: "Roswell",
            id: 16,
            Adresse: "1515 Sprucewood St",
            Mail: "livia@example.com",
            Majeur: "OCC",
            Year: 1,
            Grades : {
                Database_Management: "C",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Lyra",
            Prenom: "Sinclair",
            id: 17,
            Adresse: "555 Cherry St",
            Mail: "lyra@example.com",
            Majeur: "DIA",
            Year: 1,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "A",
                Node_React: "B",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Montague",
            Prenom: "Orion",
            id: 18,
            Adresse: "222 Cedar St",
            Mail: "orion@example.com",
            Majeur: "IND",
            Year: 3,
            Grades : {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Montclair",
            Prenom: "Orion",
            id: 19,
            Adresse: "1414 Redwoodwood St",
            Mail: "orion2@example.com",
            Majeur: "IND",
            Year: 4,
            Grades : {
                Database_Management: "C",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Nova",
            Prenom: "Nightingale",
            id: 20,
            Adresse: "333 Birch St",
            Mail: "nova@example.com",
            Majeur: "OCC",
            Year: 2,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "A",
                Node_React: "B",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Orion",
            Prenom: "Montague",
            id: 21,
            Adresse: "222 Cedar St",
            Mail: "orion@example.com",
            Majeur: "IND",
            Year: 3,
            Grades : {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Persephone",
            Prenom: "Beaumont",
            id: 22,
            Adresse: "2323 Birch St",
            Mail: "persephone@example.com",
            Majeur: "DIA",
            Year: 2,
            Grades : {
                Database_Management: "C",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Roswell",
            Prenom: "Livia",
            id: 23,
            Adresse: "1515 Sprucewood St",
            Mail: "livia@example.com",
            Majeur: "OCC",
            Year: 1,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "A",
                Node_React: "B",
                OS_Architecture: "C"
            }
        },
        {
            Nom: "Sinclair",
            Prenom: "Lyra",
            id: 24,
            Adresse: "555 Cherry St",
            Mail: "lyra@example.com",
            Majeur: "DIA",
            Year: 1,
            Grades : {
                Database_Management: "B",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "A",
                Node_React: "A",
                OS_Architecture: "F"
            }
        },
        {
            Nom: "Sterling",
            Prenom: "Seraphina",
            id: 25,
            Adresse: "789 Oak St",
            Mail: "seraphina@example.com",
            Majeur: "DIA",
            Year: 4,
            Grades : {
                Database_Management: "C",
                Fonctions_et_Suite: "B",
                Transfert_Thermique: "C",
                Node_React: "A",
                OS_Architecture: "D"
            }
        },
        {
            Nom: "Thaddeus",
            Prenom: "Ashcroft",
            id: 26,
            Adresse: "1616 Oakdale St",
            Mail: "thaddeus@example.com",
            Majeur: "CCC",
            Year: 5,
            Grades : {
                Database_Management: "B",
                Fonctions_et_Suite: "A",
                Transfert_Thermique: "C",
                Node_React: "B",
                OS_Architecture: "A"
            }
        },
        {
            Nom: "Zephyr",
            Prenom: "Winterbourne",
            id: 27,
            Adresse: "1212 Maplewood St",
            Mail: "zephyr@example.com",
            Majeur: "IND",
            Year: 2,
            Grades : {
                Database_Management: "A",
                Fonctions_et_Suite: "C",
                Transfert_Thermique: "B",
                Node_React: "B",
                OS_Architecture: "A"
            }
        }];



app.get('/api/get-students', (req: Request, res: Response) => {
    res.send(students);
});

app.get('/api/get-students/:id', (req: Request, res: Response) =>
    {
        const studentId = parseInt(req.params.id); // Extract the student ID from the request parameters
        const student = students.find((student) => student.id === studentId); // Find the student with the given ID
        if (student) {
            res.status(200).send(student); // Return the student data if found
        } else {
            res.status(404).send({ message: 'Student not found' }); // Return a 404 status if student is not found
        }
    });

app.put('/api/modify-student/:id', (req, res) => {
    const studentId = parseInt(req.params.id); // Extract the student ID from the request parameters
    let student = students.find((student) => student.id === studentId-1); // Find the index of the student with the given ID
    if (student.id!== undefined) {
        console.log(req.body)
        const updatedStudent = req.body; // Extract updated student details from the request body
        students[studentId-1].Adresse = updatedStudent.Adresse;
        students[studentId-1].Mail = updatedStudent.Mail;
        students[studentId-1].Majeur = updatedStudent.Majeur;
        students[studentId-1].Year = updatedStudent.Year;

        res.status(200).send({ message: 'Student updated successfully', student: students[student.id] }); // Return the updated student
    } else {
        res.status(404).send({ message: 'Student not found' }); // Return a 404 status if student is not found
    }
});

app.post(`/api/post-grades/:id`, (req : Request, res:Response) => {
    const studentId = parseInt(req.params.id); // Extract the student ID from the request parameters
    let student = students.find((student) => student.id === studentId-1); // Find the index of the student with the given ID
    if (student.id!== undefined) {
        const { gradeSubject, grade } = req.body;
        if (gradeSubject && grade) {
            students[studentId - 1].Grades[gradeSubject] = grade;
            res.status(200).send({ message: 'Grade updated successfully', student: students[studentId - 1] });
        } else {
            res.status(400).send({ message: 'Invalid request, missing grade or grade subject' });
        }
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
});

let idGenerator = 25;
function newid() {
    return idGenerator++;
}

console.log('starting...');
app.listen(3000, () => {
    console.log('Ok, started!');
});

