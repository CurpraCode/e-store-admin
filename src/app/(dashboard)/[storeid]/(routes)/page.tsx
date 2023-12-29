
import prismadb from "@/lib/prismadb";

interface DashboardPagepProps {
    params: {storeid:string}
}


const DashboardPage:React.FC<DashboardPagepProps> = async({params}) => {
    const store = await prismadb.store.findFirst({
        where:{
            id:params.storeid
        }
    })
    return ( 
        <div>
            Dashboard store name: {store?.name}
        </div>
     );
}
 
export default DashboardPage;