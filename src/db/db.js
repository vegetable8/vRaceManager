const { createClient } = require('@supabase/supabase-js');


require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function signUp(email, password) {

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

    if (error) {
        console.error('Error signing up:', error.message);
    } else {
        console.log(data);
    }
}

async function signIn(email, password) {
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    });

    if (error) {
        console.error('Error signing in:', error.message);
    } else {
        console.log('User signed in:', user);
        console.log('Session:', session);
    }
}

module.exports = { signUp, signIn };