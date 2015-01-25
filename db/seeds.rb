FactoryGirl.create_list( :material, 5 )
FactoryGirl.create_list( :segment, 5 )

ClientType.create!(name: "Pessoa Física")
ClientType.create!(name: "Pessoa Jurídica")

file_path = "#{Rails.root}/db/seed_data/"

File.open(file_path + 'estados.txt').each_with_index do |linha, index|
  pais, sigla, nome, ibge = linha.chomp.split("|")
  estado = State.create!( :state_abbr => sigla, :name => nome )
  puts "Importando Estado #{index} - #{nome}"
end

state = nil
File.open(file_path + 'cidades.txt').each_with_index do |linha, index|
  sigla, nome = linha.chomp.split(",")
  sigla.gsub!(/"/, '')
  nome.gsub!(/"/, '')
  state = State.find_by_state_abbr( sigla ) if state.nil? || state.state_abbr.strip.upcase != sigla.strip.upcase
  estado = City.create!( :state => state, :name => nome )
  puts "Importando Cidade #{index} - #{state.name} -> #{nome}"
end

street_suffix = StreetSuffix.create! name: "Rua"
StreetSuffix.create! name: "Avenida"

roleAdm = Role.create! name: "Administração"
Role.create! name: "Atendimento"
Role.create! name: "Diagramação"
Role.create! name: "Revisão"
Role.create! name: "Mídia"

user = User.new( email: "lrocha@publimaster.com.br",
                 password: "q1w2e3r4",
                 password_confirmation: "q1w2e3r4",
                 role: roleAdm )

address = Address.new(street_address: "Endereço Teste",
                      secondary_address: "Compl",
                      building_number: "00",
                      neighborhood: "Bairro Teste",
                      city: City.find_by_name("Rio de Janeiro"),
                      state: State.find_by_name("Rio de Janeiro"),
                      street_suffix: street_suffix,
                      zipcode: "000")

Employee.create! name: "Leandro Rocha",
                 cpf: "00000000000",
                 address: address,
                 position: "Fundador",
                 user: user
