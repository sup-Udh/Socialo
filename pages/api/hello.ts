export default function handler(_req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { name: string; }): void; new(): any; }; }; }) {
    res.status(200).json({ name: 'John Doe' })
    
  }