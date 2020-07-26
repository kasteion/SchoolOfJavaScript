import '../../assets/styles/components/notfound.css'

export default { title: 'Not Found'}

export const notFound = () => 
`
<section class="notfound">
    <h1 class="notfound--title">404</h1>
    <p class="notfound--message">La página que estás buscando no existe...</p>
    <a class="notfound--anchor" href="#">Volver...</a>
</section>
`