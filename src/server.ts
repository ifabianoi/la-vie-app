import { z } from 'zod'
import { App } from './app';

new App().server.listen(3000);

const userSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa de pelo menos 3 caracteres.'}),
  password: z.string().min(6, { message: 'A senha precisa de pelo menos 6 caracteres.'}),
})

type User = z.infer<typeof userSchema>

function saveUserToDatabase(user: User) {
  const { name, password } = userSchema.parse(user)
  
  console.log(name, password)
}

saveUserToDatabase({
  name: "Fabiano",
  password: "32232323",
})