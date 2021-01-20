<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Aujourd'hui
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
           <i class="fas fa-arrow-left"></i>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
           <i class="fas fa-arrow-right"></i>


          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mois</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semaine</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 Jours</v-list-item-title>
              </v-list-item>              
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Jour</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
          
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
              class="d-flex justify-center" 
            >
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
            
            </v-toolbar>
            <v-card-text >
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-row class="justify-space-around">
            <v-card-actions>
              <v-btn
                text
                color="primary"
               
              >
            Accéder au paris
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                text
                color="primary"
                @click="selectedOpen = false"
              >
                Retour
              </v-btn>
            </v-card-actions>
            </v-row>
        
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Mois',
        week: 'Semaine',
        day: 'Jour',
        '4day': '4 jours',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
          {
          name: 'G2 Esports VS MAD Lions',
          start: '2021-01-22 18:00',
          end: '2021-01-22 19:00' ,
          },   
          {
            name: 'Astralis VS SK Gaming',
            start: '2021-01-22 19:00',
            end: '2021-01-22 20:00' ,
          },
          {
          name: 'Rogue VS EXCEL',
          start: '2021-01-22 20:00',
          end: '2021-01-22 21:00',
          },   
          {
            name: 'Team Vitality VS Schalke 04',
            start: '2021-01-22 21:00',
            end: '2021-01-22 22:00' ,
          },          
          {
          name: 'Misfits Gaming VS Fnatic',
          start: '2021-01-22 22:00',
          end: '2021-01-22 23:00' ,
          },  
          {
          name: 'Schalke 04 VS EXCEL',
          start: '2021-01-23 17:00',
          end: '2021-01-22 18:00' ,
          },    
          {
          name: 'Team Vitality VS Misfits Gaming',
          start: '2021-01-23 18:00',
          end: '2021-01-22 19:00' ,
          },    
          {
          name: 'MAD Lions VS Astralis',
          start: '2021-01-23 19:00',
          end: '2021-01-22 20:00' ,
          },  
          {
          name: 'SK Gaming VS G2 Esports',
          start: '2021-01-23 20:00',
          end: '2021-01-22 21:00' ,
          },    
          {
          name: 'Fnatic VS Rogue',
          start: '2021-01-23 21:00',
          end: '2021-01-22 22:00' ,
          },    
          {
          name: 'Astralis VS Team Vitality',
          start: '2021-01-24 17:00',
          end: '2021-01-24 18:00' ,
          },  
          {
          name: 'Rogue VS SK Gaming',
          start: '2021-01-24 18:00',
          end: '2021-01-24 19:00' ,
          },    
          {
          name: 'Misfits Gaming VS MAD Lions',
          start: '2021-01-24 19:00',
          end: '2021-01-24 20:00' ,
          },    
          {
          name: 'Fnatic VS Schalke 04',
          start: '2021-01-24 20:00',
          end: '2021-01-24 21:00' ,
          },  
          {
          name: 'EXCEL VS G2 Esports',
          start: '2021-01-24 21:00',
          end: '2021-01-24 22:00' ,
          },   
          {
          name: 'MAD Lions VS EXCEL',
          start: '2021-01-29 18:00',
          end: '2021-01-29 19:00' ,
          },    
          {
          name: 'Schalke 04 VS SK Gaming',
          start: '2021-01-29 19:00',
          end: '2021-01-29 20:00' ,
          },    
          {
          name: 'G2 Esports VS Astralis',
          start: '2021-01-29 20:00',
          end: '2021-01-29 21:00' ,
          }, 
          {
          name: 'Misfits Gaming VS Rogue',
          start: '2021-01-29 21:00',
          end: '2021-01-29 22:00' ,
          }, 
          {
          name: 'Team Vitality VS Fnatic',
          start: '2021-01-29 22:00',
          end: '2021-01-29 23:00' ,
          }, 
          {
          name: 'EXCEL VS Astralis',
          start: '2021-01-30 17:00',
          end: '2021-01-30 18:00' ,
          }, 
          {
          name: 'Team Vitality VS Rogue',
          start: '2021-01-30 18:00',
          end: '2021-01-30 19:00' ,
          }, 
          {
          name: 'Misfits Gaming VS SK Gaming',
          start: '2021-01-30 19:00',
          end: '2021-01-30 20:00' ,
          }, 
          {
          name: 'Schalke 04 VS G2 Esports',
          start: '2021-01-30 20:00',
          end: '2021-01-30 21:00' ,
          }, 
          {
          name: 'Fnatic VS MAD Lions',
          start: '2021-01-30 21:00',
          end: '2021-01-30 22:00' ,
          },  
          {
          name: 'Schalke 04 VS Rogue',
          start: '2021-02-5 18:00',
          end: '2021-02-5 19:00' ,
          },   
          {
          name: 'Misfits Gaming VS EXCEL',
          start: '2021-02-5 19:00',
          end: '2021-02-5 20:00' ,
          }, 
          {
          name: 'Team Vitality VS G2 Esports',
          start: '2021-02-5 20:00',
          end: '2021-02-5 21:00' ,
          }, 
          {
          name: 'MAD Lions VS SK Gaming',
          start: '2021-02-5 21:00',
          end: '2021-02-5 22:00' ,
          }, 
          {
          name: 'Fnatic VS Astralis',
          start: '2021-02-5 22:00',
          end: '2021-02-5 23:00' ,
          },   
          {
          name: 'EXCEL VS SK Gaming',
          start: '2021-02-6 17:00',
          end: '2021-02-6 18:00' ,
          },  
          {
          name: 'Schalke 04 VS Misfits Gaming',
          start: '2021-02-6 18:00',
          end: '2021-02-6 19:00' ,
          }, 
          {
          name: 'Team Vitality VS MAD Lions',
          start: '2021-02-6 19:00',
          end: '2021-02-6 20:00' ,
          },  
          {
          name: 'Rogue VS Astralis',
          start: '2021-02-6 20:00',
          end: '2021-02-6 21:00' ,
          },   
          {
          name: 'G2 Esports VS Fnatic',
          start: '2021-02-6 21:00',
          end: '2021-02-6 22:00' ,
          },    
          {
          name: 'Team Vitality VS SK Gaming',
          start: '2021-02-12 18:00',
          end: '2021-02-12 19:00' ,
          }, 
          {
          name: 'Schalke 04 VS MAD Lions',
          start: '2021-02-12 19:00',
          end: '2021-02-12 20:00' ,
          },  
          {
          name: 'Misfits Gaming VS Astralis',
          start: '2021-02-12 20:00',
          end: '2021-02-12 21:00' ,
          },    
          {
          name: 'Fnatic VS EXCEL',
          start: '2021-02-12 21:00',
          end: '2021-02-12 22:00' ,
          },   
          {
          name: 'G2 Esports VS Rogue',
          start: '2021-02-12 22:00',
          end: '2021-02-12 23:00' ,
          },   
          {
          name: 'Team Vitality VS EXCEL',
          start: '2021-02-13 17:00',
          end: '2021-02-13 18:00' ,
          },   
          {
          name: 'Schalke 04 VS Astralis',
          start: '2021-02-13 18:00',
          end: '2021-02-13 19:00' ,
          },  
          {
          name: 'Fnatic VS SK Gaming',
          start: '2021-02-13 19:00',
          end: '2021-02-13 20:00' ,
          },    
          {
          name: 'MAD Lions VS Rogue',
          start: '2021-02-13 20:00',
          end: '2021-02-13 21:00' ,
          },  
          {
          name: 'Misfits Gaming VS G2 Esports',
          start: '2021-02-13 21:00',
          end: '2021-02-13 22:00' ,
          },   
          {
          name: 'Schalke 04 VS SK Gaming',
          start: '2021-02-19 18:00',
          end: '2021-02-19 19:00' ,
          },   
          {
          name: 'MAD Lions VS EXCEL',
          start: '2021-02-19 19:00',
          end: '2021-02-19 20:00' ,
          }, 
          {
          name: 'Misfits Gaming VS Rogue',
          start: '2021-02-19 20:00',
          end: '2021-02-19 21:00' ,
          }, 
          {
          name: 'Team Vitality VS Fnatic',
          start: '2021-02-19 21:00',
          end: '2021-02-19 22:00' ,
          },
          {
          name: 'G2 Esports VS Astralis',
          start: '2021-02-19 22:00',
          end: '2021-02-19 23:00' ,
          },    

      ],
      
      
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
     
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => {
            this.selectedOpen = true
          }, 10)
        }
        

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      

       updateRange ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
    
    },
    }
  }
</script>

