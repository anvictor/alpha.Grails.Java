import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.CREATED
import org.grails.guides.User
import grails.transaction.Transactional
@SuppressWarnings(['LineLength'])
@Transactional(readOnly = true)
class UserController {

    static namespace = 'scaffolding'

    static allowedMethods = [save: 'POST', update: 'PUT', delete: 'DELETE']

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond User.list(params), model:[UserCount: User.count()]
    }

    def show(User User) {
        respond User
    }

    @SuppressWarnings(['FactoryMethodName', 'GrailsMassAssignment'])
    def create() {
        respond new User(params)
    }

    @Transactional
    def save(User User) {
        if (User == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (User.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond User.errors, view:'create'
            return
        }

        User.save flush:true

        request.withFormat {
            form multipartForm {

                flash.message = message(code: 'default.created.message', args: [message(code: 'User.label', default: 'User'), User.id])
                redirect User
            }
            '*' { respond User, [status: CREATED] }
        }
    }

    def edit(User User) {
        respond User
    }

    @Transactional
    def update(User User) {
        if (User == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (User.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond User.errors, view:'edit'
            return
        }

        User.save flush:true

        request.withFormat {
            form multipartForm {

                flash.message = message(code: 'default.updated.message', args: [message(code: 'User.label', default: 'User'), User.id])
                redirect User
            }
            '*' { respond User, [status: OK] }
        }
    }

    @Transactional
    def delete(User User) {

        if (User == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        User.delete flush:true

        request.withFormat {
            form multipartForm {

                flash.message = message(code: 'default.deleted.message', args: [message(code: 'User.label', default: 'User'), User.id])
                redirect action: 'index', method: 'GET'
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {

                flash.message = message(code: 'default.not.found.message', args: [message(code: 'User.label', default: 'User'), params.id])
                redirect action: 'index', method: 'GET' 