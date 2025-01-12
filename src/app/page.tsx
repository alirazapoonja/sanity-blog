import {client} from '@/sanity/lib/client';

interface Iblog {
  name: string,
  subheadling: string,
  description: string,
}


export default async function Home() {

  let res : Iblog[] = await client.fetch('*[_type == "blog"]')
  console.log(res);

  return (
    <div>
      {
        res.map((data) => {
          return(
            <div>
              <h1 className='text-[24px] font-bold'>{data.name}</h1>
            <p className='text-[12px] font-sans'>{data.subheadling}</p>
            <p className='text-[12px] font-sans'>{data.description}</p>
           
            </div>
        )
      })
    }
    </div>
  );
}
