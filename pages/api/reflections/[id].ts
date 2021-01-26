import type { NextApiRequest, NextApiResponse } from 'next';
import markdown from '@deskeen/markdown';


// Types

type Id = number;

type Reflection = {
    title: string,
    body: string,
}

// Type Guards

function isId(potential_id: any): potential_id is Id {
    return Number(potential_id) ? true : false;
}

// GET

function getReflectionFromId(id: Id): Reflection {
    return {
        title: "Lorem Ipsum",
        body: "Hello World",
    }
}


// REST Functions
export default function idHandler(req: NextApiRequest, res: NextApiResponse) {
    
    const id = isId(req.query.id) ? req.query.id as Id : -1;

    switch(req.method) {
        case 'GET':
            res.status(200).json(getReflectionFromId(id));
            break;
        case 'POST':
            res.status(200).json({success: "Recieved POST"});
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}