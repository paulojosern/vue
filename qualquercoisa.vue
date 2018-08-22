    <template>
        <div>
            <h1>Tarefas</h1>
            <input type="text" v-model="txtNovaTarefa">
            <button v-on:click="adiciona">Chupa essa manga!</button>
            <ul>
                <li v-if="!item.done" v-for="(item, i) in tarefas" :key=i>
                    {{item.texto}} <a href='#' v-on:click="deleta(i)">Done</a>
                </li>
            </ul>

            <div style="text-decoration: line-through;" v-if="item.done" v-for="(item, i) in tarefas" :key=i>
                {{item.texto}}
            </div>

        </div>
        
    </template>
    
    <script>
        export default {
            data () {
                var txtJson = localStorage['tarefas'] || '[]'
                var tarefas = JSON.parse(txtJson)
                return {
                    txtNovaTarefa: '',
                    tarefas         
                }
            },
            methods: {
                adiciona() {
                    this.tarefas.push({texto: this.txtNovaTarefa, done: false})
                    localStorage['tarefas'] = JSON.stringify(this.tarefas)
                    this.tarefas = ''
                },
                deleta(indice) {
                    this.tarefas[indice].done = true
                    this.$set(this.tarefas, indice, this.tarefas[tarefas])
                    //this.tarefas.splice(indice,1)
                    localStorage['tarefas'] = JSON.stringify(this.tarefas)
                }
            }
        }
    </script>
    
    <style>
        
    </style>