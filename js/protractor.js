/**
 * Created by root on 1/1/16.
 */
it('should test service', function() {
    expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
        .toEqual('test');
});
