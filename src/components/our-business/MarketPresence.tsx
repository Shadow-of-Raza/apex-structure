import { MapPin, Globe, TrendingUp, Users } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

const regions = [
  { name: 'North Region', cities: 8, projects: 120, growth: '+22%' },
  { name: 'South Region', cities: 6, projects: 95, growth: '+18%' },
  { name: 'East Region', cities: 5, projects: 75, growth: '+25%' },
  { name: 'West Region', cities: 6, projects: 110, growth: '+20%' }
]

const majorCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
  'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
]

export default function MarketPresence() {
  return (
    <Section id="market-presence">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">MARKET PRESENCE</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Nationwide Reach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With a strong presence across 25+ cities, we have established ourselves 
            as a trusted real estate developer nationwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Visualization */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <Globe className="w-10 h-10 text-primary-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Geographical Coverage</h3>
                <p className="text-gray-600">Strategic presence across key markets</p>
              </div>
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="relative h-64 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl mb-8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-primary-700 font-semibold">Nationwide Presence Map</p>
                  <p className="text-primary-600 text-sm">Interactive map showing our project locations</p>
                </div>
              </div>
              
              {/* City Dots */}
              {[
                { top: '30%', left: '25%', size: 'large' },
                { top: '40%', left: '35%', size: 'medium' },
                { top: '60%', left: '45%', size: 'large' },
                { top: '50%', left: '65%', size: 'small' },
                { top: '35%', left: '75%', size: 'medium' }
              ].map((dot, index) => (
                <div
                  key={index}
                  className={`absolute rounded-full bg-primary-600 border-2 border-white ${
                    dot.size === 'large' ? 'w-6 h-6' :
                    dot.size === 'medium' ? 'w-4 h-4' : 'w-2 h-2'
                  }`}
                  style={{ top: dot.top, left: dot.left }}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">{region.name}</h4>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-gray-500">Cities</div>
                      <div className="font-bold">{region.cities}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Projects</div>
                      <div className="font-bold">{region.projects}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Growth</div>
                      <div className="font-bold text-green-600">{region.growth}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Market Statistics */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-primary-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Market Leadership</h3>
                  <p className="text-gray-600">Key performance indicators</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Market Share (Premium Segment)</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Customer Satisfaction Rate</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Repeat Business Rate</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Project Completion Rate</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Major Cities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-10 h-10 text-primary-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Key Cities Served</h3>
                  <p className="text-gray-600">Major metropolitan areas with our presence</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {majorCities.map((city, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin size={20} className="text-primary-600" />
                    </div>
                    <div className="font-medium">{city}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">
                    Serving over <span className="font-bold">10,000+</span> satisfied customers nationwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}