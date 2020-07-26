import '../../assets/styles/components/search.css'

export default { title: 'Search bar'}

export const searchBar = () => 
`
<section class="search">
    <div class="search--container">
        <h1 class="search--title">¿Que quieres ver hoy?</h1>
        <input class="search--input" type="text" placeholder="Buscar...">    
    </div>
</section>
`